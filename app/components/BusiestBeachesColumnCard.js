import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../assets/styles/colors";

const ColumnCard = ({ beachName, imagePath }) => {
  return (
    <View>
      <Image
        source={imagePath}
        style={{
          height: "80%",
          width: 200,
          alignSelf: "center",
          borderRadius: 15,
          marginLeft: 10,
        }}
      />
      <View
        style={{
          flexDirection: "column",
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{beachName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineCard: {
    height: 200,
    marginRight: 10,
    marginTop: 5,
  },
});

export default ColumnCard;
