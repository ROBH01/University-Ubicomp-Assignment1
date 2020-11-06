import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import CustomModal from "../components/CustomModal";
import colors from "../assets/styles/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
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
  onPress,
  renderRightActions,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const lightGrayColour = colors.unavailableGray;
  let semaphorRed = lightGrayColour;
  let semaphorAmber = lightGrayColour;
  let semaphorGreen = lightGrayColour;
  let statusColour = lightGrayColour;

  if (beachStatus === "Avoid") {
    semaphorRed = colors.redSemaphor;
    statusColour = semaphorRed;
  } else if (beachStatus === "Congested, stay alert") {
    semaphorAmber = colors.amberSemaphore;
    statusColour = semaphorAmber;
  } else if (beachStatus === "Low congestion") {
    semaphorGreen = colors.greenSemaphor;
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
                color={lifeguarded === "Yes" ? colors.iconActive : colors.gray}
              ></Icon>
              <Icon
                name="wc"
                size={18}
                color={
                  publicToilets === "Yes" ? colors.iconActive : colors.gray
                }
              ></Icon>
              <Icon
                name="bicycle"
                type="font-awesome"
                size={18}
                color={cycling === "Yes" ? colors.iconActive : colors.gray}
              ></Icon>
              <Icon
                name="dog-service"
                type="material-community"
                size={18}
                color={dogWalking === "Yes" ? colors.iconActive : colors.gray}
              ></Icon>
              <Icon
                name="grill"
                type="material-community"
                size={18}
                color={bbq === "No" ? colors.gray : colors.iconActive}
              ></Icon>
              <Icon
                name="local-parking"
                type="material"
                backgroundColor={
                  parkingAvailability === "No parking at this beach"
                    ? colors.gray
                    : colors.iconActive
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
