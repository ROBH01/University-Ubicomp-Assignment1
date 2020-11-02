import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FAQList = (props) => {
  let questionNumber = props.questionNumber;
  let question = props.question;
  let answer = props.answer;

  return (
    <View style={styles.rowCard}>
      <View>
        <Text style={styles.question}>
          Q{parseInt(questionNumber) + 1}. {question}
        </Text>
      </View>

      <View>
        <Text style={styles.answer}>{answer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowCard: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#f6f6f6",
    flexDirection: "column",
    borderRadius: 10,
    justifyContent: "flex-start",
    marginBottom: 10,
    // opacity: 0.3,
  },
  question: {
    fontWeight: "bold",
    fontSize: 16,
  },
  answer: {
    marginTop: 10,
    fontSize: 15,
  },
});

export default FAQList;
