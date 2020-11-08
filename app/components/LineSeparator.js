import React from "react";
import { View } from "react-native";

// This component is used to separate content with a line
const CustomLineSeparator = ({
  width,
  height,
  alignSelf,
  backgroundColor,
  marginTop,
  marginBottom,
}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        alignSelf: alignSelf,
        backgroundColor: backgroundColor,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    />
  );
};

export default CustomLineSeparator;
