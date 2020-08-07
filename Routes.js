import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './Components/MainScreen';
import Review from './Components/Review';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default Routes = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator tabBarOptions={{activeTintColor: '#753cda', inactiveTintColor: 'grey',  }}>
                <Tab.Screen name="home" component={MainScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, focused }) => <Icon  focused={focused} name="universal-access"  color={color} size={28} /> }}></Tab.Screen>
                <Tab.Screen name="review" component={Review} options={{ tabBarLabel: 'Review', tabBarIcon: ({ color, focused }) => <Icon focused={focused} name="sticky-note" color={color} size={28} /> }}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}