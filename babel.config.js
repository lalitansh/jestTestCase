module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
  plugins: ['react-native-reanimated/plugin'],
};
