import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../assets/styles/colors';
import Button from '../../components/Button';
import ScreenLayout from '../../components/ScreenLayout';

const socialDistanceImage = require('../../assets/socialdistance.png');

const Home = ({ navigation }) => (
    <ScreenLayout>
        <Text style={styles.title}>Important general notice</Text>
        <Text style={styles.subtitle}>
            Due to the closure of the summer season, congestion statuses will be continually
            reviewed and updated when required
        </Text>
        <View style={styles.buttons}>
            <Button name="BEACH LIST" onPress={() => navigation.push('beachList')} width={'80%'} />
            <Button name="FEEDBACK" onPress={() => navigation.push('feedback')} width={'80%'} />
            <Button name="FAQ" onPress={() => navigation.push('faqs')} width={'80%'} />
        </View>
        <Image source={socialDistanceImage} style={styles.image} />
    </ScreenLayout>
);

const styles = StyleSheet.create({
    title: {
        color: colors.redSemaphor,
        fontSize: 18,
        margin: 15,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
    },
    buttons: {
        margin: 50,
        height: '50%',
        justifyContent: 'space-around',
    },
    image: {
        width: 100,
        height: 60,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});

export default Home;
