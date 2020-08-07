
import React,{ useState } from 'react';
import {
  View,
  Text
} from 'react-native';
import firestore from '@react-native-firebase/firestore';


function Review() {
  getUserr =  async () => {
    const dataa = await firestore().doc("reps/22zwlGmvoIHWlcrsBu3C").get();
    console.log(dataa.data());
    }

 getUserr();
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <Text>Alohha</Text>
    </View>
  );
};


export default Review;
