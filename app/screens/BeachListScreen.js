//add code that renders the beach screen showing a list of beaches in a row card style to the user
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TextInput,
  Text,
} from "react-native";
import getBeaches from "../BeachDetails";
import ListItem from "../components/CustomRowList";
import SearchBar from "../components/SearchBar";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import CustomModal from "../components/CustomModal";
import FavModal from "../components/FavouritesModal";
import { concat } from "react-native-reanimated";

const ListItemSeperator = () => {
  return <View style={styles.containerseparator} />;
};

function RowCardFavouriteAction(props) {
  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
      style={{
        width: 70,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Icon name="star" type="font-awesome" size={30} color="gray"></Icon>
      </View>
    </TouchableWithoutFeedback>
  );
}

//let favouriteBeaches = [];

const BeachListScreen = () => {
  let beaches = getBeaches();
  const [beachData, setBeachData] = useState(beaches);
  const [value, onChangeText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [favBeaches, setFavBeaches] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (text) => {
    onChangeText(text);
    let beaches = getBeaches();
    let newBeachData = beaches;
    if (text) {
      newBeachData = beaches.filter((item) => {
        const textData = text.toLowerCase();
        const itemData = item.beachName.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
    }
    setBeachData(newBeachData);
  };

  const deleteSearchText = () => {
    onChangeText("");
    setBeachData(getBeaches);
  };

  const handleFavourite = (item) => {
    if (favBeaches.includes(item)) {
      alert(`${item.beachName} already added to favourites`);
    } else {
      let NewFavBeaches = favBeaches.concat(item);
      setFavBeaches(NewFavBeaches);
      alert(`${item.beachName} added to favourites`);
    }
  };

  const xt = () => {
    if (!pressed) {
      setPressed(true);
      // if (favBeaches.length === 0) {
      //   setBeachData(favBeaches);
      //   alert("You haven't added any beaches to favourite");
      // }
      setBeachData(favBeaches);
    } else {
      setPressed(false);
      setBeachData(getBeaches());
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <SearchBar
          value={value}
          handleSearch={handleSearch}
          deleteSearchText={deleteSearchText}
        />

        <View>
          {/* <Text>Favourite</Text> */}
          <Icon
            name="star"
            type="font-awesome"
            size={35}
            color={pressed ? "orange" : "gray"}
            onPress={xt} //This is the best way!!! Make current view display fav beaches when clicked!
            //onPress={() => setModalVisible(true)}
          ></Icon>
        </View>
      </View>

      <FavModal
        text="Hello"
        modalVisible={modalVisible}
        data={favBeaches}
        // beachName={beachName}
        // statusColour={statusColour}
        // beachStatus={beachStatus}
        // lifeguarded={lifeguarded}
        // publicToilets={publicToilets}
        // parkingAvailability={parkingAvailability}
        // dogWalking={dogWalking}
        // cycling={cycling}
        // bbq={bbq}
        // warningInfo={warningInfo}
        // imagePath={imagePath}
        // latitude={latitude}
        // longitude={longitude}
        // latitudeParking={latitudeParking}
        // longitudeParking={longitudeParking}
        // modalVisible={modalVisible}
        // closeModal={() => setModalVisible(false)}
        closeModal={() => setModalVisible(false)}
      ></FavModal>

      <FlatList
        data={beachData}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setBeachData(getBeaches);
        }}
        renderItem={({ item }) => (
          <ListItem
            articleNumber={item.id}
            beachName={item.beachName}
            beachStatus={item.beachStatus}
            lifeguarded={item.lifeguarded}
            publicToilets={item.publicToilets}
            parkingAvailability={item.parkingAvailability}
            dogWalking={item.dogWalking}
            cycling={item.cycling}
            bbq={item.bbq}
            warningInfo={item.warningInfo}
            imagePath={item.imagePath}
            latitude={item.latitude}
            longitude={item.longitude}
            latitudeParking={item.latitudeParking}
            longitudeParking={item.longitudeParking}
            onPress={() => exampleOnPress(item)}
            renderRightActions={() => (
              <RowCardFavouriteAction onPress={() => handleFavourite(item)} />
            )}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    //marginTop: 10,
    backgroundColor: "#DEDEDE",
  },
  containerseparator: {
    width: "100%",
    height: 2,
  },
  screen: {
    //marginTop: 40,
    alignItems: "center",
    backgroundColor: "pink",
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default BeachListScreen;
