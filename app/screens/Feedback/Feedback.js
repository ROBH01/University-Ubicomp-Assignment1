import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import StarRating from 'react-native-star-rating';
import colors from '../../assets/styles/colors';
import appStyles from '../../assets/styles/style-config';
import ScreenLayout from '../../components/ScreenLayout';
import Card from '../../components/Card';
import HorizontalLine from '../../components/HorizontalLine';
import Button from '../../components/Button';

const Feedback = () => {
    const [starRating, setStarRating] = useState(0);
    const [review, setReview] = useState({
        title: '',
        body: '',
    });

    const isSubmitButtonDisabled = !starRating || !review.title.length || !review.body.length;

    // Function that would ideally submit the review to an api
    const submitReview = () => {
        Alert.alert(
            'Review submitted',
            `\nStars given: ${starRating}
            \nReview title: ${review.title}
            \nReview body: ${review.body}`,
        );
    };

    return (
        <ScreenLayout>
            <Card>
                <Text style={styles.ratingTitle}>{`Rating: ${starRating}`}</Text>
                <StarRating
                    maxStars={5}
                    emptyStarColor={'gold'}
                    animation="bounce"
                    starSize={50}
                    rating={starRating}
                    containerStyle={{ marginHorizontal: 20 }}
                    fullStarColor={'gold'}
                    selectedStar={(rating) => setStarRating(rating)}
                />
                <HorizontalLine width={'40%'} />
                <View style={styles.inputField}>
                    <TextInput
                        autoCorrect={false}
                        clearButtonMode="always"
                        placeholder="Review title"
                        onChangeText={(text) =>
                            setReview((prevValue) => ({ ...prevValue, title: text }))
                        }
                        maxLength={30}
                        keyboardType="default"
                        style={styles.reviewTitleInput}
                    />
                </View>
                <View style={styles.inputField}>
                    <TextInput
                        autoCorrect={false}
                        paddingHorizontal={false}
                        multiline={true}
                        numberOfLines={10}
                        maxLength={400}
                        clearButtonMode="always"
                        onChangeText={(text) =>
                            setReview((prevValue) => ({ ...prevValue, body: text }))
                        }
                        placeholder="Write review"
                        keyboardType="default"
                        style={styles.reviewBodyInput}
                    />
                </View>
                <Button
                    name={'SUBMIT'}
                    onPress={submitReview}
                    width={'45%'}
                    disabled={isSubmitButtonDisabled}
                />
            </Card>
        </ScreenLayout>
    );
};

const styles = StyleSheet.create({
    ratingTitle: {
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 15,
    },
    inputField: {
        backgroundColor: colors.inputBackground,
        borderRadius: appStyles.borderRadius,
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
        textAlignVertical: 'top',
    },
});

export default Feedback;
