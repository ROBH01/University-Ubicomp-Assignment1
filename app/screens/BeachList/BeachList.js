import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Vibration } from 'react-native';
import getBeaches from '../../apis/beaches';
import RowCard from '../../components/CustomRowList';
import SearchBar from '../../components/SearchBar';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import colors from '../../assets/styles/colors';
import appStyles from '../../assets/styles/style-config';

const BeachListScreen = () => {
    const [beachData, setBeachData] = useState(getBeaches);
    const [search, setSearch] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [favBeaches, setFavBeaches] = useState([]);
    const [showFavBeaches, setShowFavBeaches] = useState(false);
    const [sortType, setSortType] = useState('A-Z');

    const RowCardFav = ({ onPress, beach }) => {
        const iconColour = favBeaches.includes(beach) ? 'orange' : 'gray';

        return (
            <TouchableWithoutFeedback
                onPress={() => onPress(beach)}
                style={{
                    width: 70,
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <View>
                    <Icon name="star" type="font-awesome" size={30} color={iconColour}></Icon>
                </View>
            </TouchableWithoutFeedback>
        );
    };

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
        setBeachData(newBeachData);
    };

    const clearSearch = () => {
        setSearch('');
        setBeachData(getBeaches);
    };

    const refreshBeaches = () => {
        setSearch('');
        setSortType('A-Z');
        setBeachData(getBeaches);
        Vibration.vibrate(20);
    };

    const handleFavourite = (incomingBeach) => {
        //FIXME: Save to local storage too!
        if (favBeaches.includes(incomingBeach)) {
            // remove if already added
            setFavBeaches(favBeaches.filter((beach) => beach !== incomingBeach));
        } else {
            // add if not already added
            setFavBeaches((previousState) => [...previousState, incomingBeach]);
        }
    };

    const toggleFavBeaches = () => {
        if (!showFavBeaches) {
            setShowFavBeaches(true);
            setBeachData(favBeaches);
            Vibration.vibrate(10);
        } else {
            setShowFavBeaches(false);
            setBeachData(getBeaches);
            Vibration.vibrate(10);
        }
    };

    const sortBeaches = (sortType) => {
        setSortType(sortType);

        let beaches = getBeaches();

        if (sortType === 'alphabetically') {
            setBeachData(beaches);
        } else if (sortType === 'free') {
            setBeachData(beaches.filter((beach) => beach.beachStatus === 'Low congestion'));
        } else if (sortType === 'parking') {
            setBeachData(
                beaches.filter((beach) => beach.parkingAvailability !== 'No parking at this beach'),
            );
        } else if (sortType === 'lifeguarded') {
            setBeachData(beaches.filter((beach) => beach.lifeguarded));
        } else if (sortType === 'toilets') {
            setBeachData(beaches.filter((beach) => beach.publicToilets));
        } else if (sortType === 'dog') {
            setBeachData(beaches.filter((beach) => beach.dogWalking));
        } else if (sortType === 'cycling') {
            setBeachData(beaches.filter((beach) => beach.cycling));
        } else if (sortType === 'bbq') {
            setBeachData(beaches.filter((beach) => beach.bbq !== 'Not allowed'));
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Bar view */}
            <View style={styles.topBarView}>
                {/* Search view component */}
                <SearchBar
                    value={search}
                    handleSearch={handleSearch}
                    deleteSearchText={clearSearch}
                />
                {/* Picker used to sort the beaches */}
                <View style={styles.pickerView}>
                    <Picker
                        selectedValue={sortType}
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
                        color={showFavBeaches ? 'orange' : 'gray'}
                        onPress={toggleFavBeaches}
                    ></Icon>
                </View>
            </View>

            {/* Flat list comonent displaying the beaches using the Row Card */}
            <FlatList
                data={beachData}
                //keyExtractor={({ id }) => id}
                refreshing={refreshing}
                onRefresh={refreshBeaches}
                renderItem={({ item: beach }) => (
                    <RowCard
                        beach={beach}
                        renderRightActions={() => (
                            <RowCardFav onPress={handleFavourite} beach={beach} />
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
        borderRadius: appStyles.borderRadius.borderRadius,
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

export default BeachListScreen;
