import React from 'react';
import { Text, Pressable } from 'react-native';
import colors from '../../assets/styles/colors';
import appStyles from '../../assets/styles/style-config';

const Button = ({ name, onPress, height, width, disabled }) => (
    <Pressable
        onPressOut={onPress}
        disabled={disabled}
        style={({ pressed }) => [
            {
                borderRadius: 10,
                backgroundColor: disabled ? colors.lightgray : colors.blueTutton,
                height: height || 40,
                width: pressed ? parseInt(width) - 2 + '%' : width || '40%',
                alignSelf: 'center',
                justifyContent: 'center',
                elevation: 10,
            },
        ]}
    >
        <Text style={appStyles.buttonStyle}>{name}</Text>
    </Pressable>
);

export default Button;
