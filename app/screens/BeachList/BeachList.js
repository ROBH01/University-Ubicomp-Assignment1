import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Vibration } from 'react-native';
import RowCard from '../../components/CustomRowList';
import SearchBar from '../../components/SearchBar';
import { Icon } from 'react-native-elements';
import colors from '../../assets/styles/colors';
import appStyles from '../../assets/styles/style-config';
import beachList from '../../apis/beaches';
import { sortBeaches } from './helpers';
import CustomPicker from './CustomPicker/CustomPicker';
import { SORT_TYPES } from './constants';

const BeachList = () => {
    const [beaches, setBeaches] = useState(beachList);
    const [search, setSearch] = useState('');
    const [favouriteBeaches, setFavouriteBeaches] = useState([]);
    const [showFavouriteBeaches, setShowFavouriteBeaches] = useState(false);
    const [sortType, setSortType] = useState(SORT_TYPES.alphabetic.label);

    // Code used as reference from lecture slides. It filters the beaches based on the incoming text as input
    const handleSearch = (text) => {
        setSearch(text);
        let newBeachData;

        if (text) {
            newBeachData = beaches.filter((beach) => {
                const textData = text.toLowerCase();
                const itemData = beach.name.toLowerCase();

                return itemData.indexOf(textData) > -1;
            });
        }
        setBeaches(newBeachData);
    };

    const clearSearch = () => {
        setSearch('');
        setBeaches(beachList);
    };

    const handleFavourite = (incomingBeach) =>
        favouriteBeaches.includes(incomingBeach)
            ? setFavouriteBeaches(favouriteBeaches.filter((beach) => beach !== incomingBeach))
            : setFavouriteBeaches((previousState) => [...previousState, incomingBeach]);

    const toggleFavouriteBeaches = () => {
        if (!showFavouriteBeaches) {
            setShowFavouriteBeaches(true);
            setBeaches(favouriteBeaches);
        } else {
            setShowFavouriteBeaches(false);
            setBeaches(beachList);
        }

        Vibration.vibrate(10);
    };

    const pickerHandler = (sortType) => {
        setSortType(sortType);
        setBeaches(sortBeaches(beachList, sortType));
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBarView}>
                <SearchBar
                    value={search}
                    handleSearch={handleSearch}
                    deleteSearchText={clearSearch}
                />
                <View style={styles.pickerView}>
                    <CustomPicker selectedValue={sortType} handler={pickerHandler} />
                </View>
                <View>
                    <Icon
                        name="star"
                        type="font-awesome"
                        size={35}
                        color={showFavouriteBeaches ? 'orange' : 'gray'}
                        onPress={toggleFavouriteBeaches}
                    ></Icon>
                </View>
            </View>
            <FlatList
                data={beaches}
                keyExtractor={({ id }) => id}
                renderItem={({ item: beach }) => (
                    <RowCard
                        beach={{ ...beach, isFavourite: favouriteBeaches.includes(beach) }}
                        handleFavourite={handleFavourite}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    pickerView: {
        width: 165,
        height: 35,
        backgroundColor: colors.white,
        borderRadius: appStyles.borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerseparator: {
        width: '100%',
        height: 2,
    },
    title: {
        padding: 20,
        fontSize: 42,
    },
});

export default BeachList;
