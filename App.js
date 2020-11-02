import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BeachListScreen from "./app/screens/BeachListScreen";
import { Icon } from "react-native-elements";
import FeedbackScreen from "./app/screens/Feedback";
import FAQsScreen from "./app/screens/FAQScreen";
import { ScrollView } from "react-native-gesture-handler";

function hi() {
  alert("Hello");
}

const HomeScreen = ({ navigation, route }) => (
  <View style={styles.homeScreen}>
    <Text style={{ color: "red", fontSize: 16, marginBottom: 5 }}>
      Important generic notice:
    </Text>
    <Text>
      Due to the closure of the summer season, congestion statuses will be
      continually reviewed and updated when required
    </Text>

    <View
      style={{
        marginTop: 20,
        backgroundColor: "#c6c6c6",
        height: 250,
        width: "100%",
      }}
    >
      <ScrollView horizontal={true} style={{ padding: 10 }}>
        <Image
          borderRadius={10}
          source={{
            uri:
              "https://picsum.photos/200/200?random=1" +
              Math.floor(Math.random() * 100),
            width: 200,
            height: 200,
          }}
          style={{ marginRight: 10 }}
        />
        <Image
          borderRadius={10}
          source={{
            uri:
              "https://picsum.photos/200/200?random=1" +
              Math.floor(Math.random() * 100),
            width: 200,
            height: 200,
          }}
          style={{ marginRight: 10 }}
        />
        <Image
          borderRadius={10}
          source={{
            uri:
              "https://picsum.photos/200/200?random=1" +
              Math.floor(Math.random() * 100),
            width: 200,
            height: 200,
          }}
          style={{ marginRight: 10 }}
        />
        <Image
          borderRadius={10}
          source={{
            uri:
              "https://picsum.photos/200/200?random=1" +
              Math.floor(Math.random() * 100),
            width: 200,
            height: 200,
          }}
          style={{ marginRight: 10 }}
        />
        <Image
          borderRadius={10}
          source={{
            uri:
              "https://picsum.photos/200/200?random=1" +
              Math.floor(Math.random() * 100),
            width: 200,
            height: 200,
          }}
          style={{ marginRight: 10 }}
        />
        <Image
          borderRadius={10}
          source={{
            uri:
              "https://picsum.photos/200/200?random=1" +
              Math.floor(Math.random() * 100),
            width: 200,
            height: 200,
          }}
          style={{ marginRight: 10 }}
        />
      </ScrollView>
      <Text style={{ textAlign: "center" }}>MY FAVOURITE BEACHES</Text>
    </View>

    <View
      style={{
        justifyContent: "space-around",
        height: 200,
        marginTop: 20,
        backgroundColor: "#c6c6c6",
      }}
    >
      <Button title="Beach list" onPress={() => navigation.push("beachList")} />
      <Button title="Feedback" onPress={() => navigation.push("feedback")} />
      <Button title="FAQs" onPress={() => navigation.push("faqs")} />
    </View>
  </View>
);

function ActionBarIcon() {
  return (
    <Image
      source={require("./app/assets/icon.png")}
      style={{ width: 40, height: 40, borderRadius: 40 / 2, marginLeft: 100 }}
    />
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

// Running the app here
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
              fontSize: 20,
              alignSelf: "center",
            },
            headerLeft: ActionBarIcon,
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
