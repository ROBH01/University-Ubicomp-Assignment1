import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import colors from "../assets/styles/colors";

const CustomButton = ({ buttonName, onPressIn, height, width, disabled }) => {
  return (
    <Pressable
      onPressIn={onPressIn}
      disabled={disabled}
      style={{
        borderRadius: 10,
        backgroundColor: disabled ? "lightgray" : colors.blueTutton,
        height: height,
        width: width,
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.buttonText}>{buttonName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 14,
  },
});

export default CustomButton;
