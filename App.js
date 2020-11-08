import React, { useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BeachListScreen from "./app/screens/BeachList";
import { Icon, Tooltip } from "react-native-elements";
import FeedbackScreen from "./app/screens/Feedback";
import FAQsScreen from "./app/screens/FAQ";
import getBeaches from "./app/Beach-api";
import SplashScreen from "./app/screens/SplashScreen";
import { render } from "react-dom";
import ColumnCard from "./app/components/FavouriteBeachesCard";
import colors from "./app/assets/styles/colors";
import CustomButton from "./app/components/CustomButton";
import { useSafeArea } from "react-native-safe-area-context";

const HomeScreen = ({ navigation, route }) => {
  // Example of displaying user's favourite beaches.
  function getFavouriteBeaches() {
    let favBeaches = getBeaches().filter((beach) => {
      return beach.lifeguarded === "Yes";
    });
    return favBeaches;
  }

  //const [splashVisible, setSplashVisible] = useState(true);

  // function hideSplash() {
  //   setSplashVisible(false);
  // }

  // const timeOff = () => {
  //   setTimeout(function () {
  //     hideSplash();
  //   }, 1000);
  // };

  // const Splash = () => {
  //   return (
  //     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  //       <Text>SPLASH</Text>
  //     </View>
  //   );
  // };

  // if (splashVisible) {
  //   setTimeout(() => {
  //     console.log("Hello, World!");
  //   }, 3000);
  // }

  return (
    <View style={styles.homeScreen}>
      {/* Text general notice view */}
      <View>
        <Text
          style={{
            color: colors.redSemaphor,
            fontSize: 18,
            marginBottom: 5,
            textAlign: "center",
          }}
        >
          Important general notice:
        </Text>

        <Text style={{ fontSize: 14, textAlign: "center" }}>
          Due to the closure of the summer season, congestion statuses will be
          continually reviewed and updated when required
        </Text>
      </View>

      {/* Favourite beaches view */}
      <View
        style={{
          marginTop: 10,
          backgroundColor: "#ededed",
          height: "40%",
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          My favourite beaches
        </Text>

        <FlatList
          data={getFavouriteBeaches()}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ColumnCard
              beachName={item.beachName}
              imagePath={item.imagePath}
              beachStatus={item.beachStatus}
            />
          )}
        />
      </View>

      <View
        style={{
          height: "40%",
          marginTop: 10,
          marginBottom: 10,
          justifyContent: "space-around",
        }}
      >
        <CustomButton
          buttonName={"BEACH LIST"}
          onPressIn={() => navigation.push("beachList")}
          height={40}
          width={"80%"}
        />

        <CustomButton
          buttonName={"FEEDBACK"}
          onPressIn={() => navigation.push("feedback")}
          height={40}
          width={"80%"}
        />

        <CustomButton
          buttonName={"FAQs"}
          onPressIn={() => navigation.push("faqs")}
          height={40}
          width={"80%"}
        />
      </View>
    </View>
  );
};

function ActionBarIcon() {
  return (
    <Tooltip
      popover={
        <Text style={{ color: "white", fontSize: 15 }}>App version: 1.08</Text>
      }
      backgroundColor="#2196F3"
      width={140}
      height={50}
    >
      <Image
        source={require("./app/assets/splash.png")}
        style={{ width: 40, height: 40, marginLeft: 10 }}
      />
    </Tooltip>
  );
}

function Info() {
  return (
    <Tooltip
      popover={
        <Text style={{ color: "white" }}>
          Colour statuses are for guidance only. They predict likely crowding of
          promenade and beach area today based on CCTV, social events, weather
          patterns and observation. Information is updated by the Seafront Team
          between 11am and 5pm.
        </Text>
      }
      backgroundColor="#2196F3"
      width={300}
      height={120}
      containerStyle={{ marginHorizontal: -20 }}
    >
      <Icon
        name="info"
        type="font-awesome"
        size={30}
        color="#2196F3"
        style={{ marginRight: 20 }}
      ></Icon>
    </Tooltip>
  );
}

const Root = createStackNavigator();

export default function App() {
  // const performTimeConsumingTask = async () => {
  //   console.log("HI");
  //   return new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve("result");
  //     }, 2000)
  //   );
  // };

  // async componentDidMount() {
  //   const data = await performTimeConsumingTask;
  //   console.log(data);

  //   if (data !== null) {
  //     setIsLoading(false);
  //   }
  // };
  // const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return <SplashScreen />;
  // }

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
          name="feedback"
          component={FeedbackScreen}
          options={{ title: "Feedback" }}
        />
        <Root.Screen
          name="faqs"
          component={FAQsScreen}
          options={{ title: "FAQs" }}
        />
        <Root.Screen
          name="beachList"
          component={BeachListScreen}
          options={{ title: "Beach list" }}
        />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "flex-start",
    //alignContent: "center",
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.lightgray,
  },
  title: {
    padding: 20,
    fontSize: 30,
  },
});
