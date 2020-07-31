import React,{ useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './Components/MainScreen';
import Reps from './Components/Reps';
import Review from './Components/Review';


const Drawer = createDrawerNavigator();

export default Routes=()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="home" component={MainScreen}></Drawer.Screen>
                <Drawer.Screen name="review" component={Review}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}