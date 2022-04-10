import React from 'react';
import { Text, Pressable } from 'react-native';
import colors from '../assets/styles/colors';
import appStyles from '../assets/styles/style-config';

const CustomButton = ({ buttonName, onPressOut, height, width, disabled }) => (
    <Pressable
        onPressOut={onPressOut}
        disabled={disabled}
        style={({ pressed }) => [
            {
                borderRadius: 10,
                backgroundColor: disabled ? colors.lightgray : colors.blueTutton,
                height: height,
                width: pressed ? parseInt(width) - 2 + '%' : width,
                alignSelf: 'center',
                justifyContent: 'center',
                elevation: 10,
            },
        ]}
    >
        <Text style={appStyles.buttonStyle}>{buttonName}</Text>
    </Pressable>
);

export default CustomButton;
