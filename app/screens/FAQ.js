import React from "react";
import { View, FlatList } from "react-native";
import getFAQs from "../FAQ-api";
import FAQCard from "../components/FAQCard";
import colors from "../assets/styles/colors";

const FAQsScreen = () => {
  return (
    // Container view
    <View
      style={{
        padding: 10,
        backgroundColor: colors.lightgray,
      }}
    >
      <FlatList
        data={getFAQs()}
        renderItem={({ item }) => (
          <FAQCard
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
