const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

// module.exports = {
//   publicPath: ["/patiro-app"],
// };

// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/patiro-app/" : "/",
// };
