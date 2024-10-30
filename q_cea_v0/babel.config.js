module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'], // Keep this line
    plugins: [
      // Other plugins if needed, but remove 'expo-router/babel'
    ],
  };
};
