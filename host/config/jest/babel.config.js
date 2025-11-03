export default {
  presets: [
    ['@babel/preset-typescript', { allowDeclareFields: true }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { useESModules: false, regenerator: true }],
  ],
};
