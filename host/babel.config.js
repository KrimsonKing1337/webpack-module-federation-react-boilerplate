export default function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-typescript'],
    ['@babel/preset-react', { 'runtime': 'automatic' }],
    ['@babel/preset-env'],
  ];

  const plugins = [
    ['@babel/plugin-transform-runtime', { useESModules: true, regenerator: true }],
  ];

  return {
    presets,
    plugins,
    ignore: [/\/node_modules\//],
  };
};
