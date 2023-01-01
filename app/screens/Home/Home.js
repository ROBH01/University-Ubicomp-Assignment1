import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../assets/styles/colors';
import appStyles from '../../assets/styles/style-config';
import Button from '../../components/Button';

const Home = ({ navigation }) => {
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
                <Button name="BEACH LIST" onPress={() => openStack('beachList')} width={'80%'} />
                <Button name="FEEDBACK" onPress={() => openStack('feedback')} width={'80%'} />
                <Button name="FAQ" onPress={() => openStack('faqs')} width={'80%'} />
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

export default Home;
