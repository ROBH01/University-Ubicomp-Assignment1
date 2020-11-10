import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BeachListScreen from "./app/screens/BeachList";
import { Icon, Tooltip } from "react-native-elements";
import FeedbackScreen from "./app/screens/Feedback";
import FAQsScreen from "./app/screens/FAQ";
import colors from "./app/assets/styles/colors";
import CustomButton from "./app/components/CustomButton";
import appStyles from "./app/assets/styles/style-config";

const HomeScreen = ({ navigation }) => {
  return (
    // Container view
    <View style={styles.homeScreenContainer}>
      {/* General notice view */}
      <View>
        <Text style={styles.generalNoticeTitle}>Important general notice:</Text>

        <Text style={{ fontSize: 15, textAlign: "center" }}>
          Due to the closure of the summer season, congestion statuses will be
          continually reviewed and updated when required
        </Text>
      </View>

      {/* Buttons for other screens view */}
      <View style={styles.buttonsView}>
        <CustomButton
          buttonName={"BEACH LIST"}
          onPressOut={() => navigation.push("beachList")}
          height={40}
          width={"80%"}
        />

        <CustomButton
          buttonName={"FEEDBACK"}
          onPressOut={() => navigation.push("feedback")}
          height={40}
          width={"80%"}
        />

        <CustomButton
          buttonName={"FAQs"}
          onPressOut={() => navigation.push("faqs")}
          height={40}
          width={"80%"}
        />
      </View>
    </View>
  );
};

// Left icon
function ActionBarIcon() {
  return (
    <Tooltip
      popover={
        <Text style={{ color: colors.white, fontSize: 15 }}>
          App version: 1.8
        </Text>
      }
      backgroundColor={colors.blueTutton}
      width={140}
      height={50}
    >
      <Image
        source={require("./app/assets/bcpicon.png")}
        style={{ width: 40, height: 40, marginLeft: 10 }}
      />
    </Tooltip>
  );
}
// Right icon
function Info() {
  return (
    <Tooltip
      popover={
        <Text style={{ color: colors.white }}>
          Colour statuses are for guidance only. They predict likely crowding of
          promenade and beach area today based on CCTV, social events, weather
          patterns and observation. Information is updated by the Seafront Team
          between 11am and 5pm.
        </Text>
      }
      backgroundColor={colors.blueTutton}
      width={300}
      height={120}
      containerStyle={{ marginHorizontal: -20 }}
    >
      <Icon
        name="info"
        type="font-awesome"
        size={30}
        color={colors.blueTutton}
        style={{ marginRight: 20 }}
      ></Icon>
    </Tooltip>
  );
}

const Root = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName="BCP Beach Check">
        <Root.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "BCP Beach Check",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 22,
              alignSelf: "center",
            },
            headerLeft: ActionBarIcon,
            headerRight: Info,
          }}
        />

        <Root.Screen
          name="beachList"
          component={BeachListScreen}
          options={{ title: "Beach list" }}
        />

        <Root.Screen
          name="feedback"
          component={FeedbackScreen}
          options={{ title: "Feedback" }}
        />
        <Root.Screen
          name="faqs"
          component={FAQsScreen}
          options={{ title: "FAQs" }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: appStyles.screenContainerStyle.flex,
    justifyContent: "space-around",
    alignContent: "center",
    paddingTop: 5,
    paddingLeft: appStyles.screenContainerStyle.paddingLeft,
    paddingRight: appStyles.screenContainerStyle.paddingRight,
    backgroundColor: colors.lightgray,
  },
  generalNoticeTitle: {
    color: "#e2042d",
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  buttonsView: {
    height: "40%",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-around",
  },
});
