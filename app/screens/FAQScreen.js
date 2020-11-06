import React, { useState } from "react";
import { View, FlatList } from "react-native";
import getFAQs from "../FAQDetails";
import FAQList from "../components/FAQList";
import colors from "../assets/styles/colors";

const FAQsScreen = () => {
  let questionsAndAnswers = getFAQs();
  const [faqData, setFaqData] = useState(questionsAndAnswers);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: colors.lightgray,
      }}
    >
      <FlatList
        data={faqData}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setFaqData(questionsAndAnswers);
        }}
        renderItem={({ item }) => (
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

export default FAQsScreen;
