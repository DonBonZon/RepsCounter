
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import firestore from '@react-native-firebase/firestore';


function Review() {
  getUserr =  async () => {
    const dataa = await firestore().doc("reps/jNE9zWZ9kZIeAFzDvmCn").get();
    console.log(dataa.data());
    console.log(dataa.data().reps);
    }

 getUserr();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <Text>Alohha</Text>
    </View>
  );
};


export default Review;
