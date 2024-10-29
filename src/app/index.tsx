import {
  View,
  StyleSheet,
  useWindowDimensions,
  Platform,
  Button,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { router, Stack } from "expo-router";

type PropsParams = {};

export default function WelcomeScreen() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Stack.Screen
        options={{
          title: "",
          headerShown: true,
          headerBackTitle: "Back",
          headerTitle: `My Wallet`,
          headerTitleAlign: "center",
          headerTintColor: "#854dbd",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
      />
      <View style={styles.Container}>
        <Button
          title="go Test Payment"
          onPress={() => router.push("/(private)/test-screen")}
        />
      </View>
    </>
  );
}

///////////////////////////////////////////////////////////////////////////////////

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 30,
  },
});
