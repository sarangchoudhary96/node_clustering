module.exports = {
  apps: [
    {
      name: "clustering",
      script: "./index.js",
      instances: 0,
      exec_mode: "cluster",
      autorestart: true,
    },
  ],
};
