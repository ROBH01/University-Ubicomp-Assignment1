import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../assets/styles/colors";

const ColumnCard = ({ beachName, imagePath, beachStatus }) => {
  return (
    <View>
      <Image
        source={imagePath}
        style={{
          height: "70%",
          width: 180,
          alignSelf: "center",
          borderRadius: 15,
          marginLeft: 10,
        }}
      />
      <View
        style={{
          flexDirection: "column",
          padding: 5,
          justifyContent: "center",
          //marginTop: 5,
          alignItems: "center",
        }}
      >
        <Text>{beachName}</Text>
        <Text>{beachStatus}</Text>
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
