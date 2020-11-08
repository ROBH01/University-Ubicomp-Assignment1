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
import getBeaches from "../Beach-api";
import ListItem from "../components/CustomRowList";
import SearchBar from "../components/SearchBar";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import CustomModal from "../components/CustomModal";
import { concat } from "react-native-reanimated";
import { Picker } from "@react-native-picker/picker";
import colors from "../assets/styles/colors";

const ListItemSeperator = () => {
  return <View style={styles.containerseparator} />;
};

const BeachListScreen = () => {
  const [beachData, setBeachData] = useState(getBeaches());
  const [searchText, setSearchText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [favBeaches, setFavBeaches] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortValue, setSortValue] = useState("A-Z");

  function RowCardFavouriteAction({ onPress, beach }) {
    let iconColour;

    let isInFav = favBeaches.includes(beach);
    //console.log(isInFav);
    console.log("Whether is or not in fav: " + isInFav);
    if (isInFav) {
      iconColour = "orange";
    } else {
      iconColour = "gray";
    }

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        style={{
          width: 70,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Icon
            name="star"
            type="font-awesome"
            size={30}
            color={iconColour}
          ></Icon>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  const handleSearch = (text) => {
    // updating the search text
    setSearchText(text);

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
    setSearchText("");
    setBeachData(getBeaches);
  };

  const refreshBeaches = () => {
    setBeachData(getBeaches);
    setSortValue("A-Z");
    setSearchText("");
  };

  const handleFavourite = (item) => {
    if (favBeaches.includes(item)) {
      //alert(`${item.beachName} removed from favourites`);
      console.log(`${item.beachName} removed`);
      let indexToDelete = item.id;
      console.log("Index to delete: " + indexToDelete);
      favBeaches.splice(indexToDelete, 1);

      //setFavBeaches(newFavBeaches);
    } else {
      let newFavBeaches = favBeaches.concat(item);
      setFavBeaches(newFavBeaches);
      //alert(`${item.beachName} added to favourites`);
      console.log(`${item.beachName} added`);
    }
  };

  const showHideFavouriteBeaches = () => {
    if (!pressed) {
      setPressed(true);
      setBeachData(favBeaches);
    } else {
      setPressed(false);
      setBeachData(getBeaches());
    }
  };

  const sortBeaches = (itemValue) => {
    // setting to display choice
    setSortValue(itemValue);

    // sort based on the selection
    let beaches = getBeaches();
    if (itemValue === "alphabetically") {
      setBeachData(beaches);
    } else if (itemValue === "busy") {
      setBeachData(beaches.filter((beach) => beach.beachStatus === "Avoid"));
    } else if (itemValue === "parking") {
      setBeachData(
        beaches.filter(
          (beach) =>
            beach.parkingAvailability > 0 ||
            beach.parkingAvailability !== "No parking at this beach"
        )
      );
    } else if (itemValue === "lifeguarded") {
      setBeachData(beaches.filter((beach) => beach.lifeguarded === "Yes"));
    } else if (itemValue === "toilets") {
      setBeachData(beaches.filter((beach) => beach.publicToilets === "Yes"));
    } else if (itemValue === "dog") {
      setBeachData(beaches.filter((beach) => beach.dogWalking === "Yes"));
    } else if (itemValue === "cycling") {
      setBeachData(beaches.filter((beach) => beach.cycling === "Yes"));
    } else if (itemValue === "bbq") {
      setBeachData(beaches.filter((beach) => beach.bbq !== "No"));
    }
  };

  console.log("Length: " + favBeaches.length);

  return (
    // Container View
    <View style={styles.container}>
      {/* Top Bar view */}
      <View style={styles.topBarView}>
        {/* Search view component */}
        <SearchBar
          value={searchText}
          handleSearch={handleSearch}
          deleteSearchText={deleteSearchText}
        />
        {/* Picker used to sort the beaches */}
        <View style={styles.pickerView}>
          <Picker
            selectedValue={sortValue}
            mode="dropdown"
            style={{
              width: 165,
              height: 25,
            }}
            onValueChange={(itemValue) => sortBeaches(itemValue)}
          >
            <Picker.Item label="A-Z" value="alphabetically" />
            <Picker.Item label="Busy beaches" value="busy" />
            <Picker.Item label="Car parking" value="parking" />
            <Picker.Item label="Lifeguarded" value="lifeguarded" />
            <Picker.Item label="Public toilets" value="toilets" />
            <Picker.Item label="Dog walking" value="dog" />
            <Picker.Item label="Cycling" value="cycling" />
            <Picker.Item label="BBQ" value="bbq" />
          </Picker>
        </View>

        {/* Show/Hide favourite beaches */}
        <View>
          <Icon
            name="star"
            type="font-awesome"
            size={35}
            color={pressed ? "orange" : "gray"}
            onPress={showHideFavouriteBeaches}
          ></Icon>
        </View>
      </View>

      {/* Flat list comonent displaying the beaches */}
      <FlatList
        data={beachData}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={refreshBeaches}
        renderItem={({ item }) => (
          <ListItem
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
            //onPress={() => exampleOnPress(item)} //need still to pass this and render actions?
            renderRightActions={() => (
              <RowCardFavouriteAction
                onPress={() => handleFavourite(item)}
                beach={item}
              />
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
    //width: "50%",
    //marginTop: 10,
    backgroundColor: "#DEDEDE",
  },
  topBarView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    //backgroundColor: "pink",
  },
  pickerView: {
    width: 165,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
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
