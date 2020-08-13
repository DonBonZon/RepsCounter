import React, { useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text
} from 'react-native';



function SingleReviewExercise(props) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.nameText}>{props.item.name}</Text>
            <Text>{props.item.reps.toString()}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    nameText: {
        fontSize: 15,
        color: "#280763",
    },
    repsText: {
        
    },
    wrapper:{
        margin: 4
    }
});

export default SingleReviewExercise;
