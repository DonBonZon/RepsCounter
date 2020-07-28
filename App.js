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
  FlatList
} from 'react-native';
import TopHeader from './Components/TopHeader';
import SingleExercise from './Components/SingleExercise';
import { v4 as uuidv4 } from 'uuid';
import AddExcercise from './Components/AddExcercise';



const App: () => React$Node = () => {
  const [state, setState] = useState([
    { id: uuidv4(), name: "Podciaganie nadchwytem" },
    { id: uuidv4(), name: "Back leaver" }
]);

  return (
    <>
      <StatusBar barStyle="dark" />
      <SafeAreaView> 
        <TopHeader></TopHeader>
        <FlatList data={state} renderItem={({ item }) => <SingleExercise item={item}></SingleExercise>} keyExtractor={item => item.id}/>
        <AddExcercise></AddExcercise>


      </SafeAreaView>


    </>
  );
};


export default App;
