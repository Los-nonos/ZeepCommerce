module.exports = {
  apps: [
    {
      name: 'server',
      script: './server.js',
      autorestart: true,
      watch: true,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
