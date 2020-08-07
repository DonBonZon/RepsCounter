
import React, { useState } from 'react';
import {
  FlatList,
  View,
  Keyboard
} from 'react-native';
import TopHeader from './TopHeader';
import { v4 as uuidv4 } from 'uuid';
import AddExcercise from './AddExcercise';
import SingleExercise from './SingleExercise';
import firestore from '@react-native-firebase/firestore';

function MainScreen(props) {
  const [state, setState] = useState([
    { id: uuidv4(), name: "Podciaganie nadchwytem",reps:[0]},
  ]);

  const [modalState, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false);
  }

  const deleteExcercise = id => {
    setState(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addExcercise = (name) => {
    if (name !== "") {
      setState(prevItems => {
        prevItems.push({ id: uuidv4(), name: name,reps:[0] });
        return [...prevItems];
      });
      hideModal();
    }
  };

const buttonPlusPress = id => {
    setState(prevItems => {
        let idx = prevItems.findIndex((item)=>{return item.id === id});
        prevItems[idx].reps.push(0);
        return [...prevItems];
    });
};

const buttonMinusPress = id => {
    setState(prevItems => {
      let idx = prevItems.findIndex((item)=>{return item.id === id});
      prevItems[idx].reps.pop();
      if(prevItems[idx].reps.length<1){
        deleteExcercise(id);
      }
      return [...prevItems];
    });
};

const onChangeText = (text, idx, parentId) => {
    setState(prevItems => {
        setTimeout(() => { Keyboard.dismiss() }, 600);
        let parentIndex = prevItems.findIndex((item)=>{return item.id === parentId});
        let newReps = prevItems[parentIndex].reps;
        newReps[idx] = text.replace(/^0+/, '');
        return prevItems.map(item => {
            return {
                id: item.id,
                name: item.name,
                reps: (item.id === parentIndex ? newReps : item.reps)
            }
        })
    });
};

const saveSession = () => {
  firestore().collection('reps').add({
    Date: new Date(),
    state
  }).then(() => {
    console.log('Added session to db successfully');
  });
}

  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <TopHeader saveSession={saveSession}></TopHeader>
      <FlatList data={state} renderItem={({ item }) => <SingleExercise item={item} deleteExcercise={deleteExcercise} buttonPlusPress={buttonPlusPress} buttonMinusPress={buttonMinusPress} onChangeText={onChangeText}></SingleExercise>} keyExtractor={item => item.id} />
      <AddExcercise modalState={modalState} showModal={showModal} hideModal={hideModal} addExcercise={addExcercise}></AddExcercise>
    </View>
  );
};


export default MainScreen;
 