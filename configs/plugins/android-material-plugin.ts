import { withAndroidStyles, ConfigPlugin } from "expo/config-plugins";

export default function androidStylesPlugin(config: any, customAppTheme: any) {
  return withAndroidStyles(config, (config) => {
    let modified = false;
    const styles = config.modResults;
    styles.resources.style?.map((style) => {
      if (style.$.name === "AppTheme") {
        if (!modified) {
          style.$.parent = customAppTheme;
          modified = true;
        } else {
          styles.resources.style?.splice(
            styles.resources.style.indexOf(style),
            1
          );
        }
      }
    });
    return config;
  });
}
