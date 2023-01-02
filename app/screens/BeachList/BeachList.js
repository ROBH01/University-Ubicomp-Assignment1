import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Vibration } from 'react-native';
import RowCard from '../../components/CustomRowList';
import SearchBar from '../../components/SearchBar';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import colors from '../../assets/styles/colors';
import appStyles from '../../assets/styles/style-config';
import beachList from '../../apis/beaches';

const SORT_TYPES = {
    alphabetic: 'alphabetically',
    availableSpaces: 'available',
    parking: 'parking',
    lifeguarded: 'lifeguarded',
    toilets: 'toilets',
    dogWalking: 'dog',
    cycling: 'cycling',
    bbq: 'bbq',
};

const BeachList = () => {
    const [beaches, setBeaches] = useState(beachList);
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
        setBeaches(newBeachData);
    };

    const clearSearch = () => {
        setSearch('');
        setBeaches(beachList);
    };

    const refreshBeaches = () => {
        setSearch('');
        setSortType('A-Z');
        setBeaches(beachList);
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
            setBeaches(favBeaches);
            Vibration.vibrate(10);
        } else {
            setShowFavBeaches(false);
            setBeaches(beachList);
            Vibration.vibrate(10);
        }
    };

    const sortBeaches = (sortType) => {
        setSortType(sortType);

        let beaches = beachList;

        switch (sortType) {
            case SORT_TYPES.alphabetic:
                setBeaches(
                    beaches.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)),
                );
                break;
            case SORT_TYPES.availableSpaces:
                setBeaches(beaches.filter(({ beachStatus }) => beachStatus === 'Low congestion'));
                break;
            case SORT_TYPES.parking:
                setBeaches(
                    beaches.filter(
                        ({ parkingAvailability }) =>
                            parkingAvailability !== 'No parking at this beach',
                    ),
                );
                break;
            case SORT_TYPES.lifeguarded:
                setBeaches(beaches.filter(({ lifeguarded }) => lifeguarded));
                break;
            case SORT_TYPES.toilets:
                setBeaches(beaches.filter(({ publicToilets }) => publicToilets));
                break;
            case SORT_TYPES.dogWalking:
                setBeaches(beaches.filter(({ dogWalking }) => dogWalking));
                break;
            case SORT_TYPES.cycling:
                setBeaches(beaches.filter(({ cycling }) => cycling));
                break;
            case SORT_TYPES.bbq:
                setBeaches(beaches.filter(({ bbq }) => bbq !== 'Not allowed'));
                break;
            default:
                setBeaches(
                    beaches.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)),
                );
                break;
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
                        onValueChange={sortBeaches}
                    >
                        <Picker.Item label="A-Z" value={SORT_TYPES.alphabetic} />
                        <Picker.Item label="Not busy" value={SORT_TYPES.availableSpaces} />
                        <Picker.Item label="Car parking" value={SORT_TYPES.parking} />
                        <Picker.Item label="Lifeguarded" value={SORT_TYPES.lifeguarded} />
                        <Picker.Item label="Public toilets" value={SORT_TYPES.toilets} />
                        <Picker.Item label="Dog walking" value={SORT_TYPES.dogWalking} />
                        <Picker.Item label="Cycling" value={SORT_TYPES.cycling} />
                        <Picker.Item label="BBQ" value={SORT_TYPES.bbq} />
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
                data={beaches}
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

export default BeachList;
