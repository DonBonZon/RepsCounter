
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


const deleteExcercise = id => {
  setState(prevItems => {
          return prevItems.filter(item => item.id !== id);
  });
};

const addExcercise = (name) => {
  if(name!==""){
  setState(prevItems => {
    prevItems.push({ id: uuidv4(), name: name });
    return [...prevItems];
});
    props.hideModal();
}
};



  return (
    <View>
        <TopHeader></TopHeader>
        <FlatList data={state} renderItem={({ item }) => <SingleExercise item={item} deleteExcercise={deleteExcercise} ></SingleExercise>} keyExtractor={item => item.id}/>
        <AddExcercise modalState={props.modalState} showModal={props.showModal} hideModal={props.hideModal} addExcercise={addExcercise}></AddExcercise>
    </View>
  );
};


export default MainScreen;
