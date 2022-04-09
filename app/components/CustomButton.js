import React from 'react';
import { Text, Pressable } from 'react-native';
import colors from '../assets/styles/colors';
import appStyles from '../assets/styles/style-config';

// This is a customised button that uses Pressable
const CustomButton = ({ buttonName, onPressOut, height, width, disabled }) => {
    return (
        <Pressable
            onPressOut={onPressOut}
            disabled={disabled}
            //Followed example on React Native, Pressable component for the styling
            style={({ pressed }) => [
                {
                    borderRadius: 10,
                    backgroundColor: disabled ? colors.lightgray : colors.blueTutton,
                    height: height,
                    width: pressed ? parseInt(width) - 2 + '%' : width,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderWidth: pressed ? 1 : 0.5,
                    borderColor: pressed ? 'white' : 'black',
                    elevation: 10,
                },
            ]}
        >
            <Text style={appStyles.buttonStyle}>{buttonName}</Text>
        </Pressable>
    );
};

export default CustomButton;
