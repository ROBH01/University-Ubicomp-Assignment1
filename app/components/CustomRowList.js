import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import CustomModal from '../components/CustomModal';
import colors from '../assets/styles/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CustomisedCircle from './Circle';
import appStyles from '../assets/styles/style-config';
import FavouriteCard from '../screens/BeachList/FavouriteCard/FavouriteCard';

const RowCard = ({ beach, handleFavourite }) => {
    const {
        id,
        name,
        beachStatus,
        lifeguarded,
        publicToilets,
        parkingAvailability,
        dogWalking,
        cycling,
        bbq,
        warningInfo,
        imagePath,
        latitude,
        longitude,
        latitudeParking,
        longitudeParking,
        isFavourite,
    } = beach;

    const [modalVisible, setModalVisible] = useState(false);
    const iconSize = 18;
    const lightGrayColour = colors.unavailableGray;
    let semaphorRed = lightGrayColour;
    let semaphorAmber = lightGrayColour;
    let semaphorGreen = lightGrayColour;
    let statusColour = lightGrayColour;

    if (beachStatus === 'Avoid') {
        // TODO: Add constants here instead.
        semaphorRed = colors.red;
        statusColour = semaphorRed;
    } else if (beachStatus === 'Congested, stay alert') {
        semaphorAmber = colors.amber;
        statusColour = semaphorAmber;
    } else if (beachStatus === 'Low congestion') {
        semaphorGreen = colors.lightGreen;
        statusColour = semaphorGreen;
    } else {
        statusColour = lightGrayColour;
    }

    const parkingBackgroundColor =
        parkingAvailability === 'No parking at this beach' ? colors.gray : colors.blueIconActive;

    const lifeguardedIconColor = lifeguarded ? colors.blueIconActive : colors.gray;

    const publicToiletsIconColor = publicToilets ? colors.blueIconActive : colors.gray;

    const cyclingIconColor = cycling ? colors.blueIconActive : colors.gray;

    const dogWalkingIconColor = dogWalking ? colors.blueIconActive : colors.gray;

    const bbqIconColor = bbq === 'Not allowed' ? colors.gray : colors.blueIconActive;

    return (
        <Swipeable
            overshootRight={false}
            friction={2}
            rightThreshold={20}
            renderRightActions={() => (
                <FavouriteCard
                    key={id}
                    beach={beach}
                    onPress={handleFavourite}
                    iconColour={isFavourite ? 'orange' : 'gray'}
                />
            )}
        >
            <TouchableOpacity
                activeOpacity={0.5}
                underlayColor="#DDD"
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.rowCard}>
                    <CustomModal
                        name={name}
                        statusColour={statusColour}
                        beachStatus={beachStatus}
                        lifeguarded={lifeguarded}
                        publicToilets={publicToilets}
                        parkingAvailability={parkingAvailability}
                        dogWalking={dogWalking}
                        cycling={cycling}
                        bbq={bbq}
                        warningInfo={warningInfo}
                        imagePath={imagePath}
                        latitude={latitude}
                        longitude={longitude}
                        latitudeParking={latitudeParking}
                        longitudeParking={longitudeParking}
                        modalVisible={modalVisible}
                        closeModal={() => setModalVisible(false)}
                    />

                    {/* This view renders the beach image */}
                    <View style={styles.image}>
                        <Image
                            borderRadius={appStyles.borderRadius}
                            source={imagePath}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>

                    {/* This view renders the beach name and the status */}
                    <View style={styles.beachInfo}>
                        <Text style={styles.beachTitle}>{name}</Text>
                        <Text style={{ marginTop: 5, fontSize: 15 }}>Status: {beachStatus}</Text>

                        {/* This view renders the icons */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 25,
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <Icon
                                name="life-ring"
                                type="font-awesome"
                                size={iconSize}
                                color={lifeguardedIconColor}
                            ></Icon>
                            <Icon name="wc" size={iconSize} color={publicToiletsIconColor}></Icon>
                            <Icon
                                name="bicycle"
                                type="font-awesome"
                                size={iconSize}
                                color={cyclingIconColor}
                            ></Icon>
                            <Icon
                                name="dog-service"
                                type="material-community"
                                size={iconSize}
                                color={dogWalkingIconColor}
                            ></Icon>
                            <Icon
                                name="grill"
                                type="material-community"
                                size={iconSize}
                                color={bbqIconColor}
                            ></Icon>
                            <Icon
                                name="local-parking"
                                type="material"
                                backgroundColor={parkingBackgroundColor}
                                size={iconSize}
                                color={colors.white}
                            ></Icon>
                        </View>
                    </View>

                    {/* Semaphor view */}
                    <View style={styles.semaphorView}>
                        <CustomisedCircle backgroundColor={semaphorRed} />
                        <CustomisedCircle backgroundColor={semaphorAmber} />
                        <CustomisedCircle backgroundColor={semaphorGreen} />
                    </View>
                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    rowCard: {
        height: 110,
        padding: 2,
        marginBottom: 10,
        backgroundColor: colors.white,
        flexDirection: 'row',
        borderRadius: appStyles.borderRadius,
        justifyContent: 'flex-start',
    },
    beachTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: '30%',
        padding: 5,
        overflow: 'hidden',
    },
    beachInfo: {
        width: '64%',
        backgroundColor: colors.white,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'flex-start',
    },
    semaphorView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '6%',
        borderRadius: 30,
    },
});

export default RowCard;
