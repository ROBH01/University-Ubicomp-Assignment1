//start working on a custom modal

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Modal from "react-native-modal";
import colors from "../assets/styles/colors";
//import MapViewP from "./MapView";
import openMap from "react-native-open-maps";
//import Icon from "react-native-vector-icons/FontAwesome";
import ActionSheet from "react-native-actionsheet";
import ActionSheetModal from "./ActionSheetModal";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

function InfoList(props) {
  return <Text style={{ fontSize: 15 }}>{props.children}</Text>;
}

function goToBoscombe() {
  openMap({
    travelType: "drive",
    end: "50.71979 -1.845149",
  });
}

const TravelTo = (location) => {
  console.log(location);
  openMap({
    travelType: "drive",
    end: location,
  });
};

//OR MAYBE DISPLAY SOME INFO TOO SAYING NO ADDITIONAL INFO???? Maybe is better to display as to prove principle of showing things that are supposed to appear but are not applicable, see slides principles e.g. menu visibility of actions you cannot do
const AdditionalInfo = (props) => {
  let warningInfo = props.warningInfo;
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

// This is used to separate items with a line
const LineSeparator = () => {
  return (
    <View
      style={{
        width: "20%",
        height: 2,
        alignSelf: "center",
        backgroundColor: colors.gray,
        marginTop: 5,
        marginBottom: 5,
      }}
    />
  );
};

// This component is used to display the different information shown in the modal
const TextInfoComponent = (props) => {
  return (
    <Text
      style={{
        textAlign: "center",
        backgroundColor:
          props.value === "Yes" ? colors.greenTextStatus : colors.redTextStatus,
        borderRadius: 30,
        alignSelf: "center",
        width: "30%",
        padding: 3,
        fontSize: 13,
      }}
    >
      {props.title}
    </Text>
  );
};

// This component is a customised modal, adapted to display the beach data when a beach is clicked
const CustomModal = (props) => {
  let beachName = props.beachName;
  let beachStatus = props.beachStatus;
  let statusColour = props.statusColour;
  let lifeguarded = props.lifeguarded;
  let publicToilets = props.publicToilets;
  let parkingAvailability = props.parkingAvailability;
  let dogWalking = props.dogWalking;
  let cycling = props.cycling;
  let bbq = props.bbq;
  let imagePath = props.imagePath;
  let latitude = props.latitude;
  let longitude = props.longitude;
  let warningInfo = props.warningInfo;
  let latitudeParking = props.latitudeParking;
  let longitudeParking = props.longitudeParking;

  return (
    <Modal
      isVisible={props.modalVisible}
      onBackdropPress={props.closeModal}
      onBackButtonPress={props.closeModal}
      swipeDirection="up"
      animationIn="fadeInUpBig"
      animationOut="fadeOutUp"
      useNativeDriver={true}
      animationInTiming={500}
      animationOutTiming={500}
      onSwipeComplete={props.closeModal}
    >
      {/* Main modal view */}

      <View
        style={{
          borderRadius: 20,
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 10,
          paddingRight: 10,
          justifyContent: "space-around",
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
          {/* <MapView
            style={{ height: 300, width: 300 }}
            initialRegion={{
              latitude: 50.7110904,
              longitude: -1.8979415,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            zoomEnabled={false}
            scrollEnabled={false}
            showsUserLocation={true}
          >
            <MapViewDirections
              origin={{ latitude: 50.740228, longitude: -1.879819 }}
              destination={{ latitude: 50.71979, longitude: -1.845149 }}
              apikey="AIzaSyAvGQ_xCUdrw0ILP2NOkNHKuQNk5j-yVEk"
            />
          </MapView> */}

          <Image
            borderRadius={10}
            source={imagePath}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        {/* <View
          style={{
            width: "50%",
            alignSelf: "center",
            flexDirection: "row",
            backgroundColor: "#2196f3",
            justifyContent: "center",
          }}
        > */}

        {/* <ActionSheetModal /> */}

        {/* <Icon
            name="navigation"
            type="material"
            size={30}
            color="white"
          ></Icon> */}
        {/* </View> */}

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
            backgroundColor: colors.modalInfoBox,
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

          <LineSeparator />

          <AdditionalInfo warningInfo={warningInfo} />
        </View>

        {/* <View style={{ width: "40%", alignSelf: "center" }}> */}
        {/* Button is showing a weird shade when modal is closing. Maybe use Text instead? */}
        {/* <Button title="CLOSE" onPress={props.closeModal} /> */}
        {/* </View> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ width: "42%" }}>
            <Button
              title="Directions"
              onPress={() => TravelTo(`${latitude} ${longitude}`)}
            ></Button>
          </View>

          <View style={{ width: "42%" }}>
            <Button
              title="Nearest parking"
              //disabled={beachStatus === "Avoid" ? true : false}
              onPress={() => TravelTo(`${latitudeParking} ${longitudeParking}`)}
            ></Button>
          </View>

          {/* <TouchableOpacity>
            <View
              style={{
                marginBottom: 30,
                width: 100,
                height: 100,
                alignItems: "center",
                backgroundColor: "#2196F3",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 20,
                  color: "white",
                }}
              >
                TouchableOpacity
              </Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
