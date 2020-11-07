import React from "react";
import { View, FlatList } from "react-native";
import getFAQs from "../FAQDetails";
import FAQList from "../components/FAQList";
import colors from "../assets/styles/colors";

const FAQsScreen = () => {
  let questionsAndAnswers = getFAQs();

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: colors.lightgray,
      }}
    >
      <FlatList
        data={questionsAndAnswers}
        style={{ marginTop: 20 }}
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
