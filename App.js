import React from 'react';
import { Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BeachListScreen from './app/screens/BeachList';
import { Icon, Tooltip } from 'react-native-elements';
import Feedback from './app/screens/Feedback';
import Faqs from './app/screens/Faqs';
import colors from './app/assets/styles/colors';
import Home from './app/screens/Home';

// Left icon
const ActionBarIcon = () => (
    <Tooltip
        popover={<Text style={{ color: colors.white, fontSize: 15 }}>App version: 1.8</Text>}
        backgroundColor={colors.blueTutton}
        width={140}
        height={50}
    >
        <Image
            source={require('./app/assets/bcpicon.png')}
            style={{ width: 40, height: 40, marginLeft: 10 }}
        />
    </Tooltip>
);

// Right icon
const Info = () => (
    <Tooltip
        popover={
            <Text style={{ color: colors.white }}>
                Colour statuses are for guidance only. They predict likely crowding of promenade and
                beach area today based on CCTV, social events, weather patterns and observation.
                Information is updated by the Seafront Team between 11am and 5pm.
            </Text>
        }
        backgroundColor={colors.blueTutton}
        width={300}
        height={120}
        containerStyle={{ marginHorizontal: -20 }}
    >
        <Icon
            name="info"
            type="font-awesome"
            size={30}
            color={colors.blueTutton}
            style={{ marginRight: 20 }}
        ></Icon>
    </Tooltip>
);

const Root = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="BCP Beach Check">
                <Root.Screen
                    name="home"
                    component={Home}
                    options={{
                        title: 'BCP Beach Check',
                        headerStyle: { backgroundColor: colors.white },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 22,
                            alignSelf: 'center',
                        },
                        headerLeft: ActionBarIcon,
                        headerRight: Info,
                    }}
                />
                <Root.Screen
                    name="beachList"
                    component={BeachListScreen}
                    options={{ title: 'Beach list' }}
                />
                <Root.Screen name="feedback" component={Feedback} options={{ title: 'Feedback' }} />
                <Root.Screen name="faqs" component={Faqs} options={{ title: 'FAQ' }} />
            </Root.Navigator>
        </NavigationContainer>
    );
}
