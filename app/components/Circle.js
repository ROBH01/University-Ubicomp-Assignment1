import React from 'react';
import { View } from 'react-native';

const CustomisedCircle = ({
    width,
    height,
    borderRadius,
    backgroundColor,
    marginLeft,
    alignSelf,
}) => {
    return (
        <View
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
                marginLeft: marginLeft,
                alignSelf: alignSelf,
            }}
        />
    );
};

export default CustomisedCircle;
