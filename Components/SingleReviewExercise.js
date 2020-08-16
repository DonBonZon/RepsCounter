import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
function SingleReviewExercise(props) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.nameText}>{props.item.name}</Text>
            <Text style={styles.repsText}>{props.item.reps.toString()}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    nameText: {
        fontFamily:'Bangers-Regular',
        fontSize: 22,
        color: "#280763",
        textAlign:'center',
    },
    repsText: {
        fontFamily:'Bangers-Regular',
        fontSize: 18,
        color: "#753cda",
        textAlign:'center'
    },
    wrapper:{
        margin: 4
    }
});

export default SingleReviewExercise;
