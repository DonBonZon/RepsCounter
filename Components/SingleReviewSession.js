
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
import SingleReviewExercise from './SingleReviewExercise';



function SingleReviewSession(props) {
    return (
        <View>
            <Text style={styles.dateText}>{props.item.date.toLocaleDateString() /*+"  "+props.item.date.toLocaleTimeString ()*/}</Text>
            <View style={styles.horizontalLine}></View>
            <FlatList
                data={props.item.exercises}
                renderItem={({ item }) => <SingleReviewExercise item={item}></SingleReviewExercise>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    dateText: {
        fontSize: 20,
        padding: 5,
        color: "#753cda",
        fontWeight: "bold",
    },
    horizontalLine: {
        borderBottomColor: '#753cda',
        borderBottomWidth: 2,
    }
});

export default SingleReviewSession;
