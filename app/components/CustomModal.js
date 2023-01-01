//start working on a custom modal

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../assets/styles/colors';
import openMap from 'react-native-open-maps';
import CustomisedCircle from './Circle';
import appStyles from '../assets/styles/style-config';
import HorizontalLine from './HorizontalLine/HorizontalLine';
import Button from './Button/Button';

const CustomModal = ({
    name,
    statusColour,
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
    modalVisible,
    closeModal,
}) => {
    // This component is used to display the different binary coloured information shown in the modal by using the same style for multiple Text components
    const TextInfoComponent = ({ title, value }) => (
        <Text
            style={{
                textAlign: 'center',
                backgroundColor: value
                    ? colors.greenBinaryStatusBackround
                    : colors.redBinaryStatusBackround,
                borderRadius: 2,
                alignSelf: 'center',
                width: '32%',
                padding: 5,
                fontSize: 13,
            }}
        >
            {title}
        </Text>
    );

    const travelToBeach = () => {
        openMap({
            travelType: 'drive',
            end: `${latitude} ${longitude}`,
        });
    };

    const travelToNearestParking = () => {
        openMap({
            travelType: 'drive',
            end: `${latitudeParking} ${longitudeParking}`,
        });
    };

    // This component displays additional info about each beach, if available
    const AdditionalInfo = () => (
        <Text style={styles.textualInformationText}>
            {warningInfo || 'No additional information is available'}
        </Text>
    );

    return (
        <Modal
            isVisible={modalVisible}
            onBackdropPress={closeModal}
            onBackButtonPress={closeModal}
            swipeDirection="up"
            animationIn="fadeInUpBig"
            animationOut="fadeOutUp"
            useNativeDriver={true}
            animationInTiming={500}
            animationOutTiming={500}
            onSwipeComplete={closeModal}
        >
            {/* Modal container */}
            <View style={styles.modalContainer}>
                {/* Beach title */}
                <Text style={styles.titleBeach}>{name}</Text>

                {/* Image view */}
                <View style={styles.imageView}>
                    <Image
                        borderRadius={appStyles.borderRadius.borderRadius}
                        source={imagePath}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>

                {/* Google maps navigation buttons */}
                <View style={styles.navigationButtonsView}>
                    <Button name={'DIRECTIONS'} onPress={travelToBeach} width={'48%'} />
                    <Button
                        name={'NEAREST PARKING'}
                        onPress={travelToNearestParking}
                        width={'48%'}
                    />
                </View>

                {/* Status view */}
                <View style={styles.statusView}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>
                        Status: {beachStatus}
                    </Text>

                    <CustomisedCircle
                        width={25}
                        height={25}
                        borderRadius={30}
                        backgroundColor={statusColour}
                    />
                </View>

                {/* Stats info View */}
                <View style={styles.statsInfoView}>
                    {/* Binary coloured stats info row 1 */}
                    <View style={styles.binaryColouredRow}>
                        <TextInfoComponent title="Lifeguarded" value={lifeguarded} />
                        <TextInfoComponent title="Public Toilets" value={publicToilets} />
                        <TextInfoComponent title="Cycling" value={cycling} />
                    </View>

                    {/* Binary coloured stats info row 2 */}
                    <View style={styles.binaryColouredRow}>
                        <TextInfoComponent title="Dog Walking" value={dogWalking} />
                    </View>

                    {/* Textual information view */}
                    <View style={styles.textualInformationView}>
                        <Text style={styles.textualInformationText}>BBQ: {bbq}</Text>
                        <Text style={styles.textualInformationText}>{parkingAvailability}</Text>
                    </View>

                    <HorizontalLine
                        width={'30%'}
                        height={2}
                        alignSelf={'center'}
                        color={colors.gray}
                        marginVertical={10}
                    />
                    <AdditionalInfo />
                </View>

                {/* Close button */}
                <Button name="CLOSE" onPress={closeModal} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        paddingLeft: appStyles.screenContainerStyle.paddingLeft,
        paddingRight: appStyles.screenContainerStyle.paddingRight,
        borderRadius: appStyles.borderRadius.borderRadius,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'space-between',
        backgroundColor: colors.lightgray,
    },
    titleBeach: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    imageView: {
        height: '40%',
        justifyContent: 'space-evenly',
        marginBottom: 5,
    },
    navigationButtonsView: {
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    statusView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    statsInfoView: {
        justifyContent: 'space-evenly',
        borderRadius: appStyles.borderRadius.borderRadius,
        padding: 5,
        marginTop: 5,
        backgroundColor: colors.modalStatsInfoView,
    },
    binaryColouredRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
    },
    textualInformationView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
    },
    textualInformationText: {
        textAlign: 'center',
        fontSize: 14,
    },
});

export default CustomModal;
