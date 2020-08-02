require("ts-node").register({ files: true });

exports.config = {
  runner: "local",

  specs: ["./specs/**/*.spec.ts"],

  capabilities: [
    {
      excludeDriverLogs: ["*"],
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["window-size=1960,1080"],
      },
    },
  ],

  logLevel: "silent",
  bail: 0,

  baseUrl: "",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: ["selenium-standalone"],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    register: "ts-node/register",
  },
};
