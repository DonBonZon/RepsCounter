
import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';
import SingleReviewSession from './SingleReviewSession';
import SingleExercise from './SingleExercise';
import _ from 'lodash'

function Review() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    //const fetchData = async () => {
    //  const data = await firestore().collection("reps").get();
    //  const tmp = [];
    //  data.docs.map(doc => {
    //    tmp.push({ ...doc.data() });
    //  })
    //  setReviewData(arrayToSortedState(tmp));
    //}
    //fetchData();
    const subscriber = firestore().collection("reps").onSnapshot((data) => {
      const tmp = [];
       data.docs.map(doc => {
         tmp.push({ ...doc.data() });
       })
       setReviewData(arrayToSortedState(tmp));
    })


  }, []);

  const arrayToSortedState = (array) => {
    const grouped = _.groupBy(array, element => element.id);  //Grouping by id so whole session is saved as key(id) value (exercises and reps etc) pair 
    let asArrayOfObject =[];  
    Object.keys(grouped).forEach((index)=>{   //spliting 1 big object into array of smaller ones to make flatlist easier to render
      let excercises = [];
      for(let i=0;i<grouped[index].length;i++){
        excercises.push({
          name: grouped[index][i].exerciseName,
          reps: grouped[index][i].reps,
        })
      }
      let obj = {             //how final state looks like: 
        id: index,
        date: grouped[index][0].date.toDate(),
        exercises: excercises
      }
      asArrayOfObject.push(obj);
      
    });
    return asArrayOfObject;
  }
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
    <FlatList
                data={reviewData}
                renderItem={({ item }) => <SingleReviewSession item={item}></SingleReviewSession>}
                keyExtractor={(item, index) => index.toString()}
            />
    </View>
  );
};


export default Review;
