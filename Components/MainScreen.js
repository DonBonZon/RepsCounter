
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
    { id: uuidv4(), name: "Pull ups", reps: [0] },
  ]);

  const [modalState, setModal] = useState(false);

  const saveSession = async () => {
    let id = uuidv4();
    for (let i = 0; i < state.length; i++) {
      let repsWithoutTail0 =  [...state[i].reps];
      repsWithoutTail0.splice(-1,1)
      await firestore().collection('moje').add({
        id: id,
        date: new Date(),
        exerciseName: state[i].name,
        reps: repsWithoutTail0
      });
    }
  } 

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
        prevItems.push({ id: uuidv4(), name: name, reps: [0] });
        return [...prevItems];
      });
      hideModal();
    }
  };

  const buttonPlusPress = id => {
    setState(prevItems => {
      Keyboard.dismiss();
      let idx = prevItems.findIndex((item) => { return item.id === id });
      if(prevItems[idx].reps[prevItems[idx].reps.length-1]!==0){
      prevItems[idx].reps.push(0);
      }
      return [...prevItems];
      
    });
  };

  const buttonMinusPress = id => {
    setState(prevItems => {
      let idx = prevItems.findIndex((item) => { return item.id === id });
      prevItems[idx].reps.pop();
      if (prevItems[idx].reps.length < 1) {
        deleteExcercise(id);
      }
      return [...prevItems];
    });
  };

  const onChangeText = (text, idx, parentId) => {
    setState(prevItems => {
      let parentIndex = prevItems.findIndex((item) => { return item.id === parentId });
      let newReps = prevItems[parentIndex].reps;
      newReps[idx] = text.replace(/^0+/, ''); //deleting leading 0
      return prevItems.map(item => {
        return {
          id: item.id,
          name: item.name,
          reps: (item.id === parentIndex ? newReps : item.reps)
        }
      })
    });
  };

  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <TopHeader saveSession={saveSession}></TopHeader>
      <FlatList keyboardShouldPersistTaps={'handled'} data={state} renderItem={({ item }) => <SingleExercise item={item} deleteExcercise={deleteExcercise} buttonPlusPress={buttonPlusPress} buttonMinusPress={buttonMinusPress} onChangeText={onChangeText}></SingleExercise>} keyExtractor={item => item.id} />
      <AddExcercise modalState={modalState} showModal={showModal} hideModal={hideModal} addExcercise={addExcercise}></AddExcercise>
    </View>
  );
};

export default MainScreen;
