import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import appStyles from "../assets/styles/style-config";

const SearchBar = ({ value, handleSearch, deleteSearchText }) => {
  // Used to add an icon that is displayed along the text input when the text input has a value. The onPress will clear the value if pressed
  const DeleteIcon = () => {
    if (value !== "") {
      return (
        <Icon
          name="times"
          type="font-awesome"
          size={20}
          color="gray"
          onPress={deleteSearchText}
        ></Icon>
      );
    }
    return null;
  };

  return (
    <View style={styles.searchView}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={(text) => handleSearch(text)}
        placeholder="Search..."
        maxLength={15}
        keyboardType="ascii-capable"
        style={styles.textInput}
      />
      {/* Add x to clear text input */}
      <DeleteIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    alignContent: "center",
    borderRadius: appStyles.borderRadius.borderRadius,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
  },
  textInput: {
    flex: 0.9,
    paddingHorizontal: 10,
    height: 35,
    padding: 5,
    fontSize: 15,
  },
});

export default SearchBar;
