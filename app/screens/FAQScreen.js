import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import getFAQs from "../FAQDetails";
import ListItem from "../components/CustomRowList";
import FAQList from "../components/FAQList";

const FAQsScreen = () => {
  let questionsAndAnswers = getFAQs();
  const [faqData, setFaqData] = useState(questionsAndAnswers);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.homeScreen}>
      <FlatList
        data={faqData}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setFaqData(getFAQs);
        }}
        renderItem={({ item }) => (
          // This will be my row card personalised to display QA
          <FAQList
            questionNumber={item.id}
            question={item.question}
            answer={item.answer}
          />
        )}
      />
    </View>
  );
};

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

export default FAQsScreen;
