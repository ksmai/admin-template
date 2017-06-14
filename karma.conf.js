module.exports = function (config) {
  config.set({
    files: ['./karma-test-shim.js'],

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap'],
    },

    webpack: require('./webpack.test'),

    webpackMiddleware: {
      stats: 'errors-only',
    },

    webpackServer: {
      noInfo: true,
    },

    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['progress', 'kjhtml'],
    singleRun: true,
    autoWatch: false,
  });
};
