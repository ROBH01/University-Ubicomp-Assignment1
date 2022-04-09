import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../assets/styles/colors';
import appStyles from '../assets/styles/style-config';

const FAQCard = ({ faq }) => {
    const { id: questionNumber, question, answer } = faq;

    return (
        <View style={styles.faqCard}>
            <Text style={styles.question}>{`Q${questionNumber + 1}. ${question}`}</Text>
            <Text style={styles.answer}>{answer}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    faqCard: {
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.white,
        borderRadius: appStyles.borderRadius.borderRadius,
        marginBottom: 15,
        marginRight: 5,
        marginLeft: 5,
    },
    question: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.title,
    },
    answer: {
        marginTop: 5,
        fontSize: appStyles.paragraph.fontSize,
        color: colors.paragraph,
    },
});

export default FAQCard;
