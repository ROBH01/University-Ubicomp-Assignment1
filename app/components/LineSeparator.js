import React from "react";
import { View } from "react-native";

// used to separate content with a line of incoming props
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
