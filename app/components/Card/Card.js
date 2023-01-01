import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../assets/styles/colors';

const Card = ({ children }) => {
    if (!children) {
        return null;
    }

    return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        padding: 15,
        backgroundColor: colors.white,
        marginBottom: 10,
    },
});

export default Card;
