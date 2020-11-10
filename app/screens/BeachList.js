import React, { useState } from "react";
import { StyleSheet, View, FlatList, Vibration } from "react-native";
import getBeaches from "../Beach-api";
import RowCard from "../components/CustomRowList";
import SearchBar from "../components/SearchBar";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import colors from "../assets/styles/colors";
import appStyles from "../assets/styles/style-config";

const BeachListScreen = () => {
  const [beachData, setBeachData] = useState(getBeaches());
  const [searchText, setSearchText] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [favBeaches, setFavBeaches] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [sortValue, setSortValue] = useState("A-Z");

  function RowCardFavouriteAction({ onPress, beach }) {
    let iconColour;

    let isInFav = favBeaches.includes(beach);
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

  // Code used as reference from lecture slides. It filters the beaches based on the incoming text as input
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
    Vibration.vibrate(20);
  };

  const handleFavourite = (item) => {
    if (favBeaches.includes(item)) {
      // remove if already added
      let newFavBeaches = favBeaches.splice(item.id);
      setFavBeaches(newFavBeaches);
    } else {
      // add if not already added
      let newFavBeaches = favBeaches.concat(item);
      setFavBeaches(newFavBeaches);
    }
  };

  const showHideFavouriteBeaches = () => {
    if (!pressed) {
      setPressed(true);
      setBeachData(favBeaches);
      Vibration.vibrate(10);
    } else {
      setPressed(false);
      setBeachData(getBeaches());
      Vibration.vibrate(10);
    }
  };

  const sortBeaches = (itemValue) => {
    // setting to display choice
    setSortValue(itemValue);

    // sort based on the selection
    let beaches = getBeaches();
    if (itemValue === "alphabetically") {
      setBeachData(beaches);
    } else if (itemValue === "free") {
      setBeachData(
        beaches.filter((beach) => beach.beachStatus === "Low congestion")
      );
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
            <Picker.Item label="Not busy" value="free" />
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

      {/* Flat list comonent displaying the beaches using the Row Card */}
      <FlatList
        data={beachData}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={refreshBeaches}
        renderItem={({ item }) => (
          <RowCard
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
    paddingBottom: 10,
    paddingLeft: appStyles.screenContainerStyle.paddingLeft,
    paddingRight: appStyles.screenContainerStyle.paddingRight,
    flex: appStyles.screenContainerStyle.flex,
    backgroundColor: colors.lightgray,
  },
  topBarView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pickerView: {
    width: 165,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: appStyles.borderRadius.borderRadius,
    justifyContent: "center",
    alignItems: "center",
  },
  containerseparator: {
    width: "100%",
    height: 2,
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
});

export default BeachListScreen;
