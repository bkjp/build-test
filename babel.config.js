// ///////////////////////////////////////////////////////////////
// //////////////////   PLUGINS   ////////////////////////////////
// ///////////////////////////////////////////////////////////////

// const commonPlugins = [
//   [
//     require.resolve("babel-plugin-module-resolver"),
//     {
//       root: ["./src"],
//       alias: {
//         "@app": "./src/app",
//         "@assets": "./src/assets",
//         "@components": "./src/components",
//         "@constants": "./src/constants",
//         "@contexts": "./src/contexts",
//         "@features": "./src/features",
//         "@lib": "./src/lib",
//         "@services": "./src/services",
//         "@styles": "./src/styles",
//       },
//       extensions: [
//         ".js",
//         ".jsx",
//         ".tsx",
//         ".ios.js",
//         ".android.js",
//         ".native.js",
//       ],
//     },
//   ],
// ];

// ///////////////////////////////////////////////////////////////
// //////////////////   PRESETS   ////////////////////////////////
// ///////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////
// //////////////////   EXPORT   /////////////////////////////////
// ///////////////////////////////////////////////////////////////

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
