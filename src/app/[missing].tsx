import { View, Text } from "react-native";
import React from "react";

const MissingScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "blue",
          marginHorizontal: 20,
          marginTop: "40%",
          textAlign: "center",
        }}
      >
        OUPS!!!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "blue",
          marginHorizontal: 20,
          textAlign: "center",
        }}
      >
        This route does not match
      </Text>
    </View>
  );
};

export default MissingScreen;
