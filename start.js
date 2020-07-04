const concurrently = require("concurrently");

// Concurrently
concurrently(
  [
    { command: "bundle exec bridgetown build --watch", name: "Bridgetown", prefixColor: "yellow" },
    {
      command: "yarn dev",
      name: "Snowpack",
      prefixColor: "green",
    },
  ],
  {
    restartTries: 3,
    killOthers: ["failure", "success"],
  }
).then(
  () => {
    console.log("Done.");
    console.log("\033[0G");
  },
  () => {}
);
