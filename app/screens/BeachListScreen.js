//add code that renders the beach screen showing a list of beaches in a row card style to the user
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import getBeaches from "../BeachDetails";
import ListItem from "../components/CustomRowList";
import SearchBar from "../components/SearchBar";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

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
  const [favBeachBtnTitle, setFavBeachBtnTitle] = useState(
    "Click to see your fav beaches"
  );

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

  const handleFavourite = (item) => {
    newData = beachData.filter((i) => i.id === item.id);
    setFavBeaches(newData);
    alert(`${item.beachName} added to favourites`);
  };

  function showFavouriteBeachList() {
    setFavBeachBtnTitle("Go back to the beach list");
    setBeachData(favBeaches);
  }

  return (
    <View style={styles.container}>
      <SearchBar value={value} handleSearch={handleSearch} />
      <View>
        <Button
          title={favBeachBtnTitle}
          onPress={showFavouriteBeachList}
        ></Button>
      </View>

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
            onPress={() => exampleOnPress()}
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
