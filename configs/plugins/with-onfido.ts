import {
  ConfigPlugin,
  withGradleProperties,
  withAppBuildGradle,
  withProjectBuildGradle,
} from "expo/config-plugins";

const addMavenRepository = (config) => {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.language === "groovy") {
      const mavenRepo = `mavenCentral()`;

      if (!config.modResults.contents.includes(mavenRepo)) {
        config.modResults.contents = config.modResults.contents.replace(
          /allprojects \{/,
          `allprojects {
    repositories {
        ${mavenRepo}
    }`
        );
      }
    }

    return config;
  });
};

const enableMultiDex = (config) => {
  return withAppBuildGradle(config, (config) => {
    if (config.modResults.language === "groovy") {
      const multiDexConfig = `multiDexEnabled true`;

      if (!config.modResults.contents.includes(multiDexConfig)) {
        config.modResults.contents = config.modResults.contents.replace(
          /defaultConfig \{/,
          `defaultConfig {
        ${multiDexConfig}`
        );
      }
    }

    return config;
  });
};

const withOnfido = (config) => {
  config = addMavenRepository(config);
  config = enableMultiDex(config);
  return config;
};

module.exports = withOnfido;
