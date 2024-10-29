/**
 * To import other TypeScript files into app.config.ts or customize the language features,
 *  we recommend using ts-node. ts-node also enables using import syntax in any
 * file imported by app.config.ts. This means you can write local config plugins
 * in TypeScript with full language features.
 */
import "ts-node/register"; // Add this to import TypeScript files
import "dotenv/config";
import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  // const isStaging = process.env.APP_VARIANT === "staging";
  //const env = getEnvVars();
  // const appVersion = app.appVersion;
  const appOwner = "b_k_j_p";
  const appName = "kamride";
  const appScheme = "kamride";
  const appSlug = "kamride";
  const appVersion = "1.0.3";
  const projectId = "";
  const appBundleIdentifier = "com.myapp";

  const baseConfig: ExpoConfig = {
    ...config,
    name: appName,
    owner: appOwner,
    scheme: appScheme,
    version: appVersion,
    slug: appSlug,
    privacy: "public",
    updates: {
      url: "http://localhost:3000/api/manifest",
      enabled: true,
      fallbackToCacheTimeout: 0,
      checkAutomatically: "ON_LOAD",
    },
    extra: {
      eas: {
        projectId: projectId,
      },
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: appBundleIdentifier,
      //  buildNumber: appVersion,
      // entitlements: {
      //   "com.apple.developer.in-app-payments": ["merchant.kamride"],
      // },
      config: {
        googleMapsApiKey: "AIza...........sawergyhuds",
      },
    },
    android: {
      permissions: ["android.permission.RECORD_AUDIO"],
      package: appBundleIdentifier,
      runtimeVersion: appVersion,
      // versionCode: 3, // You have to update this every time you make a new build
      adaptiveIcon: {
        foregroundImage: "./src/assets/images/app_icon.png",
        backgroundColor: "#fff",
      },
      config: {
        googleMaps: {
          apiKey: "AIzaS....................tn3U",
        },
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./src/assets/images/app-icon.png",
    },
  };

  return baseConfig;
};
