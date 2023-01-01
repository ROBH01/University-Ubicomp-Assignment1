import React from 'react';
import { View } from 'react-native';

const CustomisedCircle = ({ width, height, borderRadius, backgroundColor }) => (
    <View
        style={{
            width: width || 20,
            height: height || 20,
            borderRadius: borderRadius || 10,
            backgroundColor,
        }}
    />
);

export default CustomisedCircle;
