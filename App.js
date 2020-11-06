import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BeachListScreen from "./app/screens/BeachListScreen";
import { Icon, Tooltip } from "react-native-elements";
import FeedbackScreen from "./app/screens/FeedbackScreen";
import FAQsScreen from "./app/screens/FAQScreen";
import { ScrollView } from "react-native-gesture-handler";
import getBeaches from "./app/BeachDetails";
import CustomRowList from "./app/components/CustomRowList";
import SplashScreen from "./app/screens/SplashScreen";
import { render } from "react-dom";
import { useActionSheet } from "@expo/react-native-action-sheet";
import ColumnCard from "./app/components/BusiestBeachesColumnCard";
import colors from "./app/assets/styles/colors";

const HomeScreen = ({ navigation, route }) => {
  function getBusyBeaches() {
    let busyBeaches = getBeaches().filter((item) => {
      return item.beachStatus === "Avoid";
    });
    return busyBeaches;
  }

  return (
    <View style={styles.homeScreen}>
      <Text
        style={{
          color: colors.redSemaphor,
          fontSize: 18,
          marginBottom: 5,
          textAlign: "center",
        }}
      >
        Important generic notice:
      </Text>
      <Text style={{ fontSize: 16 }}>
        Due to the closure of the summer season, congestion statuses will be
        continually reviewed and updated when required
      </Text>

      <View
        style={{
          marginTop: 20,
          backgroundColor: "white",
          height: 290,
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
            marginTop: 2,
          }}
        >
          Beaches to avoid at the moment
        </Text>

        <FlatList
          data={getBusyBeaches()}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ColumnCard
              beachName={item.beachName}
              beachStatus={item.beachStatus}
              imagePath={item.imagePath}
            />
          )}
        />
      </View>

      <View
        style={{
          justifyContent: "space-around",
          height: 150,
          marginTop: 10,
          backgroundColor: "lightgray",
        }}
      >
        <Button
          title="Beach list"
          onPress={() => navigation.push("beachList")}
        />
        <Button title="Feedback" onPress={() => navigation.push("feedback")} />
        <Button title="FAQs" onPress={() => navigation.push("faqs")} />
      </View>

      <TouchableOpacity>
        <View
          style={{
            width: "60%",
            height: 40,
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 10,
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
      </TouchableOpacity>

      {/* XPERNEST LOGO */}
      {/* <View style={{ marginBottom: "90%" }}>
        <Image
          source={require("./app/assets/xpertnest.jpg")}
          style={{ width: "100%", height: "50%", borderRadius: 20 }}
          resizeMode="center"
        />
      </View> */}
    </View>
  );
};

function ActionBarIcon() {
  return (
    <Image
      source={require("./app/assets/splash.png")}
      style={{ width: 40, height: 40, marginLeft: 10 }}
    />
  );
}

function Info() {
  return (
    <Tooltip
      popover={
        <Text style={{ color: "white", fontSize: 15 }}>
          Colour coded maps are for guidance only and predict likely crowding of
          promenade and beach area today based on previous football, CCTV,
          weather patterns and observation. Information is then updated via live
          observation by the Seafront Team between 11am and 5pm.
        </Text>
      }
      backgroundColor="#2196F3"
      width={300}
      height={150}
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

// function FAQs() {
//   return (
//     <Icon
//       name="frequently-asked-questions"
//       type="material-community"
//       size={30}
//       color="white"
//       backgroundColor="gray"
//       marginRight={10}
//     ></Icon>
//   );
// }

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
    // alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#dedede",
  },
  title: {
    padding: 20,
    fontSize: 30,
  },
});
