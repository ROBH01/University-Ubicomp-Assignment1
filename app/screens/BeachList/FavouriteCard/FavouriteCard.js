import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const FavouriteCard = ({ onPress, beach, iconColour }) => {
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

export default FavouriteCard;
