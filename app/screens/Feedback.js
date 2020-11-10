import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import StarRating from "react-native-star-rating";
import CustomLineSeparator from "../components/LineSeparator";
import colors from "../assets/styles/colors";
import appStyles from "../assets/styles/style-config";
import CustomButton from "../components/CustomButton";

const FeedbackScreen = () => {
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");

  // Function that would ideally submit the review. Here it is just an alert with the details the user has typed in
  function submitReview() {
    alert(
      `Review submitted.
      \nStars given: ${rating}
      \nReview title: ${reviewTitle}
      \nReview body: ${reviewBody}`
    );
  }

  return (
    <View style={styles.containerView}>
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
        <View style={styles.reviewInputBody}>
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
        <View style={styles.reviewInputBody}>
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

        {/* Submit review button */}
        <CustomButton
          buttonName={"SUBMIT"}
          onPressOut={submitReview}
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
  containerView: {
    flex: appStyles.screenContainerStyle.flex,
    paddingLeft: appStyles.screenContainerStyle.paddingLeft,
    paddingRight: appStyles.screenContainerStyle.paddingRight,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.lightgray,
    justifyContent: "center",
  },
  feedbackWindow: {
    backgroundColor: colors.white,
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
    borderRadius: appStyles.borderRadius.borderRadius,
    shadowColor: "#c6c6c6",
    shadowOffset: { width: 5, height: 10 },
    shadowRadius: 3,
    elevation: 30,
  },
  ratingTitle: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 15,
  },
  reviewInputBody: {
    backgroundColor: colors.inputBackground,
    borderRadius: appStyles.borderRadius.borderRadius,
    padding: 5,
    marginBottom: 15,
  },
  reviewTitleInput: {
    paddingHorizontal: 10,
    height: 35,
    padding: 5,
    fontSize: 16,
  },
  reviewBodyInput: {
    paddingHorizontal: 10,
    padding: 5,
    fontSize: 16,
    textAlignVertical: "top",
  },
});

export default FeedbackScreen;
