/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import TopHeader from './Components/TopHeader';
import SingleExercise from './Components/SingleExercise';
import { v4 as uuidv4 } from 'uuid';
import AddExcercise from './Components/AddExcercise';
import MainScreen from './Components/MainScreen';
import Routes from './Routes';





const App: () => React$Node = () => {
  return (
    <>
     <Routes ></Routes>
    </>
  );
};


export default App;
