import React from 'react';
import { View, FlatList } from 'react-native';
import getFAQs from '../FAQ-api';
import FAQCard from '../components/FAQCard';
import colors from '../assets/styles/colors';
import appStyles from '../assets/styles/style-config';

const FAQsScreen = () => {
    const faqs = getFAQs();

    return (
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: appStyles.screenContainerStyle.paddingLeft,
                paddingRight: appStyles.screenContainerStyle.paddingRight,
                flex: appStyles.screenContainerStyle.flex,
                backgroundColor: colors.lightgray,
            }}
        >
            <FlatList
                data={faqs}
                keyExtractor={({ id }) => id}
                renderItem={({ item: faq }) => <FAQCard faq={faq} />}
            />
        </View>
    );
};

export default FAQsScreen;
