import { Stack, router, useNavigationContainerRef } from "expo-router";
import { Platform, View } from "react-native";

// <RealmProvider schema={realmSchema} schemaVersion={3}></RealmProvider>

const RootLayout = () => {
  return <RootLayoutNav />;
};

export default RootLayout;

export const RootLayoutNav = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="[missing]"
          options={{
            title: "Missing screen",
            headerTitleAlign: "center",
            headerTitle: "Missing route",
          }}
        />

        <Stack.Screen
          name="(private)/test-screen"
          options={{ headerShown: false }}
        />
      </Stack>
    </View>
  );
};
