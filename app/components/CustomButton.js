import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import colors from "../assets/styles/colors";

const CustomButton = ({ buttonName, onPressIn, height, width, disabled }) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Pressable
        onPressIn={onPressIn}
        disabled={disabled}
        style={{
          borderRadius: 10,
          backgroundColor: disabled ? "lightgray" : colors.blueTutton,
        }}
      >
        <Text style={styles.buttonText}>{buttonName}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    textAlign: "center",
    height: "100%",
    width: "100%",
    textAlignVertical: "center",
    fontSize: 15,
  },
});

export default CustomButton;
