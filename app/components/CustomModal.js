//start working on a custom modal

import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";
import colors from "../assets/styles/colors";
import openMap from "react-native-open-maps";
import CustomLineSeparator from "../components/LineSeparator";
import CustomButton from "../components/CustomButton";

// This component is used to display the different information shown in the modal
const TextInfoComponent = ({ title, value }) => {
  return (
    <Text
      style={{
        textAlign: "center",
        backgroundColor:
          value === "Yes" ? colors.greenTextStatus : colors.redTextStatus,
        borderRadius: 30,
        alignSelf: "center",
        width: "30%",
        padding: 3,
        fontSize: 13,
      }}
    >
      {title}
    </Text>
  );
};

// This component is a customised modal, adapted to display the beach data when a beach is clicked
const CustomModal = ({
  beachName,
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
  function TravelToBeach() {
    openMap({
      travelType: "drive",
      end: `${latitude} ${longitude}`,
    });
  }

  const AdditionalInfo = () => {
    if (!warningInfo) {
      warningInfo = "No additional information is available";
    }
    return (
      <Text
        style={{
          fontSize: 14,
          padding: 2,
          width: "100%",
          alignSelf: "center",
          borderRadius: 15,
          textAlign: "center",
        }}
      >
        {warningInfo}
      </Text>
    );
  };

  function TravelToNearestParking() {
    openMap({
      travelType: "drive",
      end: `${latitudeParking} ${longitudeParking}`,
    });
  }

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
      {/* Main modal view */}
      <View
        style={{
          borderRadius: 20,
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 10,
          paddingRight: 10,
          justifyContent: "space-evenly",
          backgroundColor: colors.lightgray,
        }}
      >
        {/* Beach name view */}
        <View>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", alignSelf: "center" }}
          >
            {beachName}
          </Text>
        </View>

        {/* Image view */}
        <View style={{ height: "45%", justifyContent: "space-evenly" }}>
          <Image
            borderRadius={10}
            source={imagePath}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        {/* Status view */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Status: {beachStatus}
          </Text>
          <View
            style={{
              width: 25,
              height: 25,
              alignSelf: "center",
              marginLeft: 10,
              borderRadius: 30,
              backgroundColor: statusColour,
            }}
          />
        </View>

        {/* Additional Info View */}
        <View
          style={{
            justifyContent: "space-evenly",
            borderRadius: 20,
            padding: 5,
          }}
        >
          {/* Short info view row 1*/}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: 5,
            }}
          >
            <TextInfoComponent title="Lifeguarded" value={lifeguarded} />
            <TextInfoComponent title="Public Toilets" value={publicToilets} />
            <TextInfoComponent title="Cycling" value={cycling} />
          </View>

          {/* Short info row 2 */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 5,
            }}
          >
            <TextInfoComponent title="Dog Walking" value={dogWalking} />
          </View>

          {/* Extended into */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                marginBottom: 2,
              }}
            >
              BBQ: {bbq}
            </Text>
            <Text
              style={{
                textAlign: "center",

                fontSize: 14,
              }}
            >
              {parkingAvailability === "No parking at this beach"
                ? parkingAvailability
                : "Parking availability: " + parkingAvailability + "%"}
            </Text>
          </View>

          <CustomLineSeparator
            width={"30%"}
            height={2}
            alignSelf={"center"}
            backgroundColor={colors.gray}
            marginTop={5}
            marginBottom={5}
          />

          <AdditionalInfo />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            flexDirection="row"
            style={{ alignItems: "center", maxWidth: "90%", marginBottom: 5 }}
          >
            <CustomButton
              buttonName={"DIRECTIONS"}
              onPressIn={TravelToBeach}
              height={40}
              width={"45%"}
            />
            <Icon
              name="navigation"
              type="material"
              size={35}
              color={colors.blueTutton}
            ></Icon>
            <CustomButton
              buttonName={"NEAREST PARKING"}
              onPressIn={TravelToNearestParking}
              height={40}
              width={"45%"}
            />
          </View>
        </View>
        <CustomButton
          buttonName={"CLOSE"}
          onPressIn={closeModal}
          height={30}
          width={"60%"}
        />
      </View>
    </Modal>
  );
};

export default CustomModal;
