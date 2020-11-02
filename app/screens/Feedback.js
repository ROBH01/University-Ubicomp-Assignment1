import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const FeedbackScreen = ({ navigation, route }) => (
  <View style={styles.homeScreen}>
    <Text style={styles.title}>Feedback screen</Text>
  </View>
);

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: "#dedede",
  },
  title: {
    padding: 20,
    fontSize: 30,
  },
});

export default FeedbackScreen;
