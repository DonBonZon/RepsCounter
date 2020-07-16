import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import Reps from './Reps';

function SingleExercise(props) {
    const [state, setState] = useState([
        { id: uuidv4(), reps: 0 }
    ]);

    const buttonPlusPress = id => {
        setState(prevItems => {
            prevItems.push({ id: uuidv4(), reps: 0 });
            return [...prevItems];
        });
    };

    const buttonMinusPress = id => {
        setState(prevItems => {
            if (prevItems.length > 1) {
                return prevItems.filter(item => item.id !== id);
            } else return prevItems;
        });
    };

    const onChangeText = (text, id) => {
        setState(prevItems => {
            return prevItems.map(item => {
                return {
                    id: item.id,
                    reps: (item.id === id ? text.replace(/^0+/, '') : item.reps)
                }
            })
        });
    };

    function validateInput(text) {

    }

    return (
        <View>
            <Text style={styles.exerciseName}>Podciąganie nadchwytem</Text>
            <FlatList
                data={state}
                renderItem={({ item }) => <Reps item={item} buttonMinusPress={buttonMinusPress} buttonPlusPress={buttonPlusPress} onChangeText={onChangeText}></Reps>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    exerciseName: {
        fontSize: 25,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
export default SingleExercise;