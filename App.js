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



const App: () => React$Node = () => {
  const [state, setState] = useState(false);
  const showModal = () => {
    setState(true);
  }
  const hideModal = () => {
    setState(false);
  }
  return (
    <>
      <StatusBar barStyle="dark" />
      <SafeAreaView style={{backgroundColor: '#ffffff', flex: 1}}> 
   
        <MainScreen modalState={state} showModal={showModal} hideModal={hideModal}></MainScreen>

      </SafeAreaView>


    </>
  );
};


export default App;
