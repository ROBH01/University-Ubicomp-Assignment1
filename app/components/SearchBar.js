import React from "react";
import { TextInput, View } from "react-native";
import { Icon } from "react-native-elements";

const SearchBar = ({ value, handleSearch, deleteSearchText }) => {
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
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        margin: 10,
        borderRadius: 15,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "35%",
      }}
    >
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        //clearButtonMode="always"
        value={value}
        onChangeText={(text) => handleSearch(text)}
        placeholder="Search beach"
        maxLength={15}
        keyboardType="ascii-capable"
        style={{
          flex: 0.9,
          paddingHorizontal: 10,
          height: 35,
          padding: 5,
          fontSize: 15,
        }}
      />
      <DeleteIcon />
    </View>
  );
};

export default SearchBar;
