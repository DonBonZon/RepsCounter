
import React,{ useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View
} from 'react-native';
import TopHeader from './TopHeader';
import { v4 as uuidv4 } from 'uuid';
import AddExcercise from './AddExcercise';
import SingleExercise from './SingleExercise';


function MainScreen(props) {
  const [state, setState] = useState([
    { id: uuidv4(), name: "Podciaganie nadchwytem" },
    { id: uuidv4(), name: "Back leaver" }
]);

  return (
    <View>
        <TopHeader></TopHeader>
        <FlatList data={state} renderItem={({ item }) => <SingleExercise item={item}></SingleExercise>} keyExtractor={item => item.id}/>
        <AddExcercise modalState={props.modalState}></AddExcercise>
    </View>
  );
};


export default MainScreen;
