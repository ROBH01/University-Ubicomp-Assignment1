import React from 'react';
import { View } from 'react-native';
import colors from '../../assets/styles/colors';

const HorizontalLine = ({ width, height, alignSelf, color, marginVertical }) => (
    <View
        style={{
            width: width || '80%',
            height: height || 2,
            alignSelf: alignSelf || 'center',
            backgroundColor: color || colors.lightgray,
            marginVertical: marginVertical || 20,
        }}
    />
);

export default HorizontalLine;
