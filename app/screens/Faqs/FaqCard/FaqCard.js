import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../../assets/styles/colors';
import appStyles from '../../../assets/styles/style-config';
import Card from '../../../components/Card/Card';

const FaqCard = ({ faq }) => {
    const { question, answer } = faq;

    return (
        <Card>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.answer}>{answer}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    question: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.black,
    },
    answer: {
        marginTop: 5,
        fontSize: appStyles.defaultFontSize,
        color: colors.gray,
    },
});

export default FaqCard;
