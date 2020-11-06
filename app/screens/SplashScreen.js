import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import { exp } from "react-native-reanimated";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        WELCOME TO THE SPLASH SCREEN
      </Text>
    </View>
  );
};

export default SplashScreen;
