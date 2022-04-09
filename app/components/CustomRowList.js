import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import CustomModal from '../components/CustomModal';
import colors from '../assets/styles/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CustomisedCircle from './Circle';
import appStyles from '../assets/styles/style-config';

const RowCard = ({
    beachName,
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
    renderRightActions,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const iconSize = 18;
    const lightGrayColour = colors.unavailableGray;
    let semaphorRed = lightGrayColour;
    let semaphorAmber = lightGrayColour;
    let semaphorGreen = lightGrayColour;
    let statusColour = lightGrayColour;

    if (beachStatus === 'Avoid') {
        semaphorRed = colors.redSemaphor;
        statusColour = semaphorRed;
    } else if (beachStatus === 'Congested, stay alert') {
        semaphorAmber = colors.amberSemaphor;
        statusColour = semaphorAmber;
    } else if (beachStatus === 'Low congestion') {
        semaphorGreen = colors.greenSemaphor;
        statusColour = semaphorGreen;
    } else {
        statusColour = lightGrayColour;
    }

    return (
        <Swipeable
            overshootRight={false}
            friction={2}
            rightThreshold={20}
            renderRightActions={renderRightActions}
        >
            <TouchableOpacity
                activeOpacity={0.5}
                underlayColor="#DDD"
                onPress={() => setModalVisible(true)}
            >
                <View style={styles.rowCard}>
                    <CustomModal
                        beachName={beachName}
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
                            borderRadius={appStyles.borderRadius.borderRadius}
                            source={imagePath}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </View>

                    {/* This view renders the beach name and the status */}
                    <View style={styles.beachInfo}>
                        <Text style={styles.beachTitle}>{beachName}</Text>
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
                                color={lifeguarded === 'Yes' ? colors.blueIconActive : colors.gray}
                            ></Icon>
                            <Icon
                                name="wc"
                                size={iconSize}
                                color={
                                    publicToilets === 'Yes' ? colors.blueIconActive : colors.gray
                                }
                            ></Icon>
                            <Icon
                                name="bicycle"
                                type="font-awesome"
                                size={iconSize}
                                color={cycling === 'Yes' ? colors.blueIconActive : colors.gray}
                            ></Icon>
                            <Icon
                                name="dog-service"
                                type="material-community"
                                size={iconSize}
                                color={dogWalking === 'Yes' ? colors.blueIconActive : colors.gray}
                            ></Icon>
                            <Icon
                                name="grill"
                                type="material-community"
                                size={iconSize}
                                color={bbq === 'No' ? colors.gray : colors.blueIconActive}
                            ></Icon>
                            <Icon
                                name="local-parking"
                                type="material"
                                backgroundColor={
                                    parkingAvailability === 'No parking at this beach'
                                        ? colors.gray
                                        : colors.blueIconActive
                                }
                                size={iconSize}
                                color={colors.white}
                            ></Icon>
                        </View>
                    </View>

                    {/* Semaphor view */}
                    <View style={styles.semaphorView}>
                        <CustomisedCircle
                            width={20}
                            height={20}
                            borderRadius={10}
                            backgroundColor={semaphorRed}
                        />
                        <CustomisedCircle
                            width={20}
                            height={20}
                            borderRadius={10}
                            backgroundColor={semaphorAmber}
                        />
                        <CustomisedCircle
                            width={20}
                            height={20}
                            borderRadius={10}
                            backgroundColor={semaphorGreen}
                        />
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
        borderRadius: appStyles.borderRadius.borderRadius,
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
