// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add support for CSS files
config.resolver.assetExts.push('css');

// Add support for NativeWind
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('nativewind/babel'),
};

module.exports = config;
