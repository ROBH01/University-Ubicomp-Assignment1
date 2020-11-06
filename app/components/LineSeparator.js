import React from "react";
import { View } from "react-native";

// This is used to separate items with a line and incoming properties
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
