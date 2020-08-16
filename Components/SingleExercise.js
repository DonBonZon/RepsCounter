import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import Reps from './Reps';


function SingleExercise(props) {
    return (
        <View>
            <Text style={styles.exerciseName}>{props.item.name}</Text>
            <FlatList
                data={props.item.reps}
                renderItem={({ item,index }) => <Reps item={item} buttonMinusPress={props.buttonMinusPress} buttonPlusPress={props.buttonPlusPress} onChangeText={props.onChangeText} parentId={props.item.id} index={index} numOfElements={props.item.reps.length}></Reps>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    exerciseName: {
        fontFamily:'Bangers-Regular',
        fontSize: 35,
        padding: 3,
        textAlign: 'center',
    }
});
export default SingleExercise;