import React,{ useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './Components/MainScreen';
import Reps from './Components/Reps';
import Review from './Components/Review';


const Tab = createBottomTabNavigator();

export default Routes=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="home" component={MainScreen}></Tab.Screen>
                <Tab.Screen name="review" component={Review}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}