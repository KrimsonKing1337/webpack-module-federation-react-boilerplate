const { ModuleFederationPlugin } = require('webpack').container;
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');

const deps = require('./package.json').dependencies;

module.exports = (env = {}, argv) => {
  const webpackMode = argv.mode;

  const isProd = webpackMode === 'production';

  const plugins = [
    new ModuleFederationPlugin({
      name: 'remote1',
      filename: 'remoteEntry.js',
      remotes: {
        remote2: 'remote2@http://localhost:3002/remoteEntry.js',
      },
      exposes: {
        './Button': './src/components/Button/Button.tsx'
      },
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          strictVersion: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(webpackMode),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ];

  const rules = [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.tsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            api: 'modern',
          },
        },
      ],
    },
    {
      test: /\.(jpeg|jpg|png|docx)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            esModule: false,
          },
        },
      ],
    },
    { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['url-loader?limit=100000'] },
  ];

  const buildDir = path.join(__dirname, 'dist');

  return {
    entry: ['./src/index'],
    mode: webpackMode,
    devtool: !isProd ? 'eval-source-map' : false,
    devServer: {
      static: {
        directory: buildDir,
      },
      port: 3001,
      historyApiFallback: true,
      hot: true,
      liveReload: true,
      // headers: { 'Access-Control-Allow-Origin': '*' }
    },
    output: {
      publicPath: 'auto',
      path: buildDir,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    target: !isProd ? 'web' : ['web', 'es5'],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss'],
      modules: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './node_modules'),
      ],
      fallback: {
        crypto: false,
      },
    },
    module: {
      rules: rules,
    },
    plugins: plugins,
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  };
};
