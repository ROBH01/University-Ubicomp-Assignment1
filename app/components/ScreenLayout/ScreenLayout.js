import React from 'react';
import { View } from 'react-native';
import colors from '../../assets/styles/colors';
import appStyles from '../../assets/styles/style-config';

const ScreenLayout = ({ children }) => (
    <View
        style={{
            padding: 10,
            flex: appStyles.screenContainerStyle.flex,
            backgroundColor: colors.lightgray,
        }}
    >
        {children}
    </View>
);

export default ScreenLayout;
