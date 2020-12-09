module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
