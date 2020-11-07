import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import StarRating from "react-native-star-rating";
import CustomLineSeparator from "../components/LineSeparator";
import colors from "../assets/styles/colors";
import CustomButton from "../components/CustomButton";

const FeedbackScreen = () => {
  // Function that would ideally submit the review, in this case it's just an alert with the details the user has typed in
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
    <View style={styles.feedbackScreen}>
      {/* Feedback window */}
      <View style={styles.feedbackWindow}>
        {/* Rating view */}
        <View>
          <Text style={styles.ratingTitle}>Rating: {rating}/5</Text>
          <StarRating
            maxStars={5}
            emptyStarColor={"gold"}
            animation="bounce"
            starSize={50}
            rating={rating}
            containerStyle={{ marginLeft: "8%", marginRight: "8%" }}
            fullStarColor={"gold"}
            selectedStar={(rating) => setRating(rating)}
          />
        </View>

        <CustomLineSeparator
          width={"40%"}
          height={3}
          alignSelf={"center"}
          backgroundColor={"lightgray"}
          marginTop={15}
          marginBottom={20}
        />

        {/* Review title view */}
        <View style={styles.reviewTitleView}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            placeholder="Review title"
            onChangeText={(text) => setReviewTitle(text)}
            maxLength={30}
            keyboardType="default"
            style={styles.reviewTitleInput}
          />
        </View>

        {/* Body review view */}
        <View style={styles.reviewBodyView}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            paddingHorizontal={false}
            multiline={true}
            numberOfLines={10}
            clearButtonMode="always"
            onChangeText={(text) => setReviewBody(text)}
            placeholder="Write review"
            keyboardType="default"
            style={styles.reviewBodyInput}
          />
        </View>

        <CustomButton
          buttonName={"SUBMIT"}
          onPressIn={submitReview}
          height={40}
          width={"45%"}
          disabled={
            rating === 0 || reviewTitle.length === 0 || reviewBody.length === 0
              ? true
              : false
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedbackScreen: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.lightgray,
    justifyContent: "center",
  },
  feedbackWindow: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: colors.white,
    flexDirection: "column",
    borderRadius: 10,
  },
  ratingTitle: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 15,
  },
  reviewTitleView: {
    backgroundColor: colors.textInputBackground,
    borderRadius: 10,
    padding: 5,
    marginBottom: 15,
  },
  reviewTitleInput: {
    paddingHorizontal: 10,
    height: 35,
    padding: 5,
    fontSize: 16,
  },
  reviewBodyView: {
    backgroundColor: colors.textInputBackground,
    borderRadius: 10,
    padding: 5,
    marginBottom: 15,
  },
  reviewBodyInput: {
    paddingHorizontal: 10,
    padding: 5,
    fontSize: 16,
    textAlignVertical: "top",
  },
});

export default FeedbackScreen;
