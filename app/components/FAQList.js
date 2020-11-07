import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../assets/styles/colors";
import appStyles from "../assets/styles/style-config";

const FAQList = ({ questionNumber, question, answer }) => {
  return (
    <View style={styles.faqRowCard}>
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
  faqRowCard: {
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.white,
    borderRadius: appStyles.borderRadius.borderRadius,
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  question: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.title,
  },
  answer: {
    marginTop: 5,
    fontSize: appStyles.paragraph.fontSize,
    color: colors.paragraph,
  },
});

export default FAQList;
