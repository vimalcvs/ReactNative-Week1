const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
 
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'],
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'svg'],
  },
  extraNodeModules: {
    '@react-navigation': require.resolve('@react-navigation'),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
