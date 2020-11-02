import React from "react";
import { TextInput } from "react-native";

const SearchBar = (props) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      //clearButtonMode="always"
      value={props.value}
      onChangeText={(text) => props.handleSearch(text)}
      placeholder="Search"
      maxLength={15}
      keyboardType="ascii-capable"
      style={{
        backgroundColor: "white",
        paddingHorizontal: 10,
        alignSelf: "center",
        width: "60%",
        fontSize: 16,
        height: 35,
        marginTop: 10,
        marginBottom: 15,
        padding: 5,
        borderRadius: 15,
        fontSize: 15,
      }}
    />
    //   <Icon name="cancel" size={20} />
    //   <Icon name="search" size={25} />
  );
};

export default SearchBar;
