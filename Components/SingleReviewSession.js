import React from 'react';
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
        fontSize: 25,
        padding: 5,
        color: "#280763",
        fontFamily:'Bangers-Regular',
    },
    horizontalLine: {
        borderBottomColor: '#280763',
        borderBottomWidth: 3,
    }
});

export default SingleReviewSession;
