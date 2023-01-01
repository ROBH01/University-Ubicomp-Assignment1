import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../assets/styles/colors';
import CustomButton from '../components/CustomButton';
import appStyles from '../assets/styles/style-config';

const HomeScreen = ({ navigation }) => {
    const openStack = (screen) => {
        navigation.push(screen);
    };

    return (
        <View style={styles.homeScreenContainer}>
            <Text style={styles.generalNoticeTitle}>Important general notice:</Text>
            <Text style={{ fontSize: 15, textAlign: 'center' }}>
                Due to the closure of the summer season, congestion statuses will be continually
                reviewed and updated when required
            </Text>
            <View style={styles.buttonsView}>
                <CustomButton
                    buttonName="BEACH LIST"
                    onPressOut={() => openStack('beachList')}
                    height={40}
                    width={'80%'}
                />

                <CustomButton
                    buttonName="FEEDBACK"
                    onPressOut={() => openStack('feedback')}
                    height={40}
                    width={'80%'}
                />

                <CustomButton
                    buttonName="FAQ"
                    onPressOut={() => openStack('faqs')}
                    height={40}
                    width={'80%'}
                />
            </View>

            <Image
                source={require('../assets/socialdistance.png')}
                style={{
                    width: 100,
                    height: 60,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreenContainer: {
        flex: appStyles.screenContainerStyle.flex,
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingTop: 5,
        paddingLeft: appStyles.screenContainerStyle.paddingLeft,
        paddingRight: appStyles.screenContainerStyle.paddingRight,
        backgroundColor: colors.lightgray,
    },
    generalNoticeTitle: {
        color: '#e2042d',
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center',
    },
    buttonsView: {
        height: '40%',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
    },
});

export default HomeScreen;
