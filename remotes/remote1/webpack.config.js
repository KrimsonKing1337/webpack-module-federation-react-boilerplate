import webpack from 'webpack';
const { DefinePlugin } = webpack;
const { ModuleFederationPlugin } = webpack.container;

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import packageJson from './package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deps = packageJson.dependencies;

export default (env = {}, argv) => {
  const webpackMode = argv.mode;

  const isProd = webpackMode === 'production';

  const plugins = [
    new ModuleFederationPlugin({
      name: 'remote1',
      filename: 'remoteEntry.js',
      remotes: {
        host: 'host@http://localhost:3000/remoteEntry.js',
        remote2: 'remote2@http://localhost:3002/remoteEntry.js',
      },
      exposes: {
        './Button': './src/components/Button/Button.tsx',
        './Root': './src/components/Root/Root.tsx',
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
