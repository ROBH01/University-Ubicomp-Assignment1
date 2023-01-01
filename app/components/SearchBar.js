import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import appStyles from '../assets/styles/style-config';

const SearchBar = ({ value, handleSearch, deleteSearchText }) => (
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
        {value ? (
            <Icon
                name="times"
                type="font-awesome"
                size={20}
                color="gray"
                onPress={deleteSearchText}
            />
        ) : null}
    </View>
);

const styles = StyleSheet.create({
    searchView: {
        flexDirection: 'row',
        alignContent: 'center',
        borderRadius: appStyles.borderRadius.borderRadius,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
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
