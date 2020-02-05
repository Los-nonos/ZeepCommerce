var cpus = require('os').cpus().length;

module.exports = {
  rules: [
    {
      test: /.[tj]sx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'thread-loader',
        options: {
          workers: cpus - 1,
        },
      },
    },
  ],
};
