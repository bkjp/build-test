import "dotenv/config";

export const getEnvVars = (env = process.env.NODE_ENV) => {
  switch (env) {
    case "development":
      return {
        apiUrl: process.env.EXPO_PUBLIC_BASE_URL_LOCAL,
        apiUrlIO: process.env.EXPO_PUBLIC_BASE_URL_LOCAL_IO,
        sentryDNS: process.env.EXPO_PUBLIC_SENTRY_DNS,
        sentryProjectName: process.env.EXPO_PUBLIC_SENTRY_PROJECT_NAME,
        sentryOrgSlug: process.env.EXPO_PUBLIC_SENTRY_ORGANIZATION_SLUG,
        googleIosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
        googleWeClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
        googleIosClientSecret: process.env.EXPO_PUBLIC_WEB_CLIENT_SECRET,
        appName: process.env.EXPO_PUBLIC_APP_NAME,
        appSlug: process.env.EXPO_PUBLIC_APP_SLUG,
        expoAccountOwner: process.env.EXPO_PUBLIC_EXPO_ACCOUNT_OWNER,
        appScheme: process.env.EXPO_PUBLIC_APP_SCHEME,
        appVersion: process.env.EXPO_PUBLIC_APP_VERSIOn,
        androidPackageName: process.env.EXPO_PUBLIC_ANDROID_PACKAGE_NAME,
      };
    case "production":
      return {
        apiUrl: process.env.EXPO_PUBLIC_BASE_URL_LOCAL,
        apiUrlIO: process.env.EXPO_PUBLIC_BASE_URL_LOCAL_IO,
        sentryDNS: process.env.EXPO_PUBLIC_SENTRY_DNS,
        sentryProjectName: process.env.EXPO_PUBLIC_SENTRY_PROJECT_NAME,
        sentryOrgSlug: process.env.EXPO_PUBLIC_SENTRY_ORGANIZATION_SLUG,
        googleIosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
        googleWeClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
        googleIosClientSecret: process.env.EXPO_PUBLIC_WEB_CLIENT_SECRET,
        bundleID: process.env.EXPO_PUBLIC_BUNDLE_ID,
        androidPackageName: process.env.EXPO_PUBLIC_ANDROID_PACKAGE_NAME,
        appName: process.env.EXPO_PUBLIC_APP_NAME,
        appSlug: process.env.EXPO_PUBLIC_APP_SLUG,
        expoAccountOwner: process.env.EXPO_PUBLIC_EXPO_ACCOUNT_OWNER,
        appScheme: process.env.EXPO_PUBLIC_APP_SCHEME,
        appVersion: process.env.EXPO_PUBLIC_APP_VERSIOn,
      };
    default:
      throw new Error("An error occurs");
  }
};

export const logEnvVars = () => {};
