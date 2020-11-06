import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import StarRating from "react-native-star-rating";
import LinearGradient from "react-native-linear-gradient";

const FeedbackScreen = ({ navigation, route }) => {
  const LineSeparator = () => {
    return (
      <View
        style={{
          width: "40%",
          height: 3,
          alignSelf: "center",
          backgroundColor: "lightgray",
          marginTop: 15,
          marginBottom: 20,
        }}
      />
    );
  };

  function submitReview() {
    alert(
      `Review submitted.
      \nStars given: ${rating}
      \nReview title: ${reviewTitle}
      \nReview body: ${reviewBody}`
    );
  }

  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");

  return (
    <View style={styles.homeScreen}>
      <View style={styles.rowCard}>
        {/* Rating view */}
        <View
          style={{ backgroundColor: "white", borderRadius: 10, padding: 5 }}
        >
          <Text style={{ textAlign: "center", fontSize: 22, marginBottom: 10 }}>
            Rating: {rating}/5
          </Text>
          <StarRating
            disabled={false}
            maxStars={5}
            emptyStarColor={"gold"}
            animation="bounce"
            starSize={50}
            rating={rating}
            containerStyle={{ marginLeft: "5%", marginRight: "5%" }}
            fullStarColor={"gold"}
            selectedStar={(rating) => setRating(rating)}
          />
        </View>

        <LineSeparator />

        {/* Review title view */}
        <View
          style={{
            backgroundColor: "#ededed",
            borderRadius: 10,
            padding: 5,
            marginBottom: 10,
          }}
        >
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="Review title"
            onChangeText={(text) => setReviewTitle(text)}
            maxLength={30}
            keyboardType="default"
            style={{
              paddingHorizontal: 10,
              height: 35,
              padding: 5,
              fontSize: 16,
            }}
          />
        </View>

        {/* Body review view */}
        <View
          style={{
            backgroundColor: "#ededed",
            borderRadius: 10,
            padding: 5,
            marginBottom: 20,
          }}
        >
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            paddingHorizontal={false}
            multiline={true}
            numberOfLines={10}
            //clearButtonMode="always"
            onChangeText={(text) => setReviewBody(text)}
            placeholder="Write review"
            keyboardType="default"
            style={{
              paddingHorizontal: 10,
              padding: 5,
              fontSize: 16,
              textAlignVertical: "top",
            }}
          />
        </View>
        <Button title="Submit review" onPress={submitReview} />
      </View>
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
  rowCard: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 20,
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "column",
    borderRadius: 10,
    //justifyContent: "flex-start",
  },
  title: {
    padding: 20,
    fontSize: 30,
  },
});

export default FeedbackScreen;
