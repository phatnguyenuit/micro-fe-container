module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    // ...add your webpack config
    config.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      '@material-ui/core': 'MaterialUI',
    };
    return config;
  },
};
