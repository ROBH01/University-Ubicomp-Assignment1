import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import CustomModal from "../components/CustomModal";
import colors from "../assets/styles/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
//import { TouchableOpacity } from "react-native-gesture-handler";

const ListItem = (props) => {
  let beachName = props.beachName;
  let beachStatus = props.beachStatus;
  let lifeguarded = props.lifeguarded;
  let publicToilets = props.publicToilets;
  let parkingAvailability = props.parkingAvailability;
  let dogWalking = props.dogWalking;
  let cycling = props.cycling;
  let bbq = props.bbq;
  let warningInfo = props.warningInfo;
  let imagePath = props.imagePath;
  let latitude = props.latitude;
  let longitude = props.longitude;
  let latitudeParking = props.latitudeParking;
  let longitudeParking = props.longitudeParking;
  const [modalVisible, setModalVisible] = useState(false);
  const lightGrayColour = "#afafaf";
  let semaphorRed = lightGrayColour;
  let semaphorAmber = lightGrayColour;
  let semaphorGreen = lightGrayColour;
  let statusColour = lightGrayColour;

  if (beachStatus === "Avoid") {
    semaphorRed = "#f41f1f";
    statusColour = semaphorRed;
  } else if (beachStatus === "Congested, stay alert") {
    semaphorAmber = "#f4781f";
    statusColour = semaphorAmber;
  } else if (beachStatus === "Low congestion") {
    semaphorGreen = "#4ac63f";
    statusColour = semaphorGreen;
  } else {
    statusColour = lightGrayColour;
  }

  return (
    // here on the onPress could get a function from its "props" e.g. props.[name prop passed into this prop component]
    <Swipeable
      overshootRight={false}
      friction={2}
      rightThreshold={20}
      renderRightActions={props.renderRightActions}
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

          {/* This view renders the image */}
          <View style={styles.image}>
            <Image
              borderRadius={10}
              source={imagePath}
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          {/* This view renders the beach name and the status */}
          <View style={styles.info}>
            {/* <View
            style={{
              flexDirection: "column",
              padding: 10,
              justifyContent: "space-evenly",
              backgroundColor: "pink",
            }}
          > */}
            <Text style={styles.headline}>{beachName}</Text>
            <Text style={{ marginTop: 5, fontSize: 15 }}>
              Status: {beachStatus}
            </Text>

            <View
              style={{
                flexDirection: "row",
                marginTop: 25,
                justifyContent: "space-evenly",
              }}
            >
              <Icon
                name="life-ring"
                type="font-awesome"
                size={18}
                color={lifeguarded === "Yes" ? "#0078c6" : colors.gray}
                // backgroundColor={lifeguarded === "Yes" ? "#0078c6" : colors.gray}
              ></Icon>
              <Icon
                name="wc"
                size={18}
                color={publicToilets === "Yes" ? "#0078c6" : colors.gray}
                // backgroundColor={
                //   publicToilets === "Yes" ? "#0078c6" : colors.gray
                // }
              ></Icon>
              <Icon
                name="bicycle"
                type="font-awesome"
                size={18}
                color={cycling === "Yes" ? "#0078c6" : colors.gray}
                // backgroundColor={cycling === "Yes" ? "#0078c6" : colors.gray}
              ></Icon>
              <Icon
                name="dog-service"
                type="material-community"
                size={18}
                color={dogWalking === "Yes" ? "#0078c6" : colors.gray}
                // backgroundColor={dogWalking === "Yes" ? "#b76e40" : colors.gray}
              ></Icon>
              <Icon
                name="grill"
                type="material-community"
                size={18}
                color={bbq === "No" ? colors.gray : "#0078c6"}
              ></Icon>
              <Icon
                name="local-parking"
                type="material"
                backgroundColor={
                  parkingAvailability === "No parking at this beach"
                    ? colors.gray
                    : "#0078c6"
                }
                size={18}
                color="white"
              ></Icon>
            </View>
          </View>

          <View style={styles.semaphor}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: semaphorRed,
              }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: semaphorAmber,
              }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: semaphorGreen,
              }}
            />
            {/* <Image 
            source={redImageSource}
            style= {{ width: 20, height: 20}}
            />
          <Image 
            source={amberImageSource}
            style= {{ width: 20, height: 21}}
            />
          <Image 
            source={greenImageSource}
            style= {{ width: 20, height: 20}}
            /> */}
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontWeight: "bold",
    fontSize: 16,
  },
  rowCard: {
    height: 110,
    padding: 2,
    marginBottom: 10,
    backgroundColor: "#f6f6f6",
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "flex-start",
  },
  image: {
    width: "30%",
    padding: 5,
    overflow: "hidden",
  },
  info: {
    width: "64%",
    backgroundColor: "#f6f6f6",
    flexDirection: "column",
    padding: 10,
    justifyContent: "flex-start",
  },
  semaphor: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "#f6f6f6", //'#f6f6f6',
    width: "6%",
    borderRadius: 30,
  },
});

export default ListItem;
