//start working on a custom modal

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../assets/styles/colors';
import openMap from 'react-native-open-maps';
import CustomLineSeparator from '../components/LineSeparator';
import CustomButton from '../components/CustomButton';
import CustomisedCircle from './Circle';
import appStyles from '../assets/styles/style-config';

// This is a custom modal, adapted to display the beach data when a beach is clicked
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
    const TextInfoComponent = ({ title, value }) => {
        return (
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
    };

    function travelToBeach() {
        openMap({
            travelType: 'drive',
            end: `${latitude} ${longitude}`,
        });
    }

    function travelToNearestParking() {
        openMap({
            travelType: 'drive',
            end: `${latitudeParking} ${longitudeParking}`,
        });
    }

    // This component displays additional info about each beach, if available
    const AdditionalInfo = () => {
        if (!warningInfo) {
            warningInfo = 'No additional information is available';
        }
        return <Text style={styles.textualInformationText}>{warningInfo}</Text>;
    };

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
                    <CustomButton
                        buttonName={'DIRECTIONS'}
                        onPressOut={travelToBeach}
                        height={30}
                        width={'48%'}
                    />
                    <CustomButton
                        buttonName={'NEAREST PARKING'}
                        onPressOut={travelToNearestParking}
                        height={30}
                        width={'48%'}
                    />
                </View>

                {/* Status view */}
                <View style={styles.statusView}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Status: {beachStatus}</Text>

                    <CustomisedCircle
                        width={25}
                        height={25}
                        borderRadius={30}
                        backgroundColor={statusColour}
                        marginLeft={10}
                        alignSelf={'center'}
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

                    <CustomLineSeparator
                        width={'30%'}
                        height={2}
                        alignSelf={'center'}
                        backgroundColor={colors.gray}
                        marginTop={5}
                        marginBottom={5}
                    />

                    {/* Component to show additional information if available */}
                    <AdditionalInfo />
                </View>

                {/* Close button */}
                <CustomButton
                    buttonName={'CLOSE'}
                    onPressOut={closeModal}
                    height={30}
                    width={'40%'}
                />
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
