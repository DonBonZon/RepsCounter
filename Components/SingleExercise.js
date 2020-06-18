import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SingleExercise(props) {
    return (
        <View>
            <Text style={styles.exerciseName}>Podciąganie nadchwytem</Text>
            <View style={styles.inputs}>
                <TextInput placeholder='Reps' style={styles.textInput}/>
                <Icon name="plus-square" size={55} color="black"/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    exerciseName: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputs: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        marginRight: 15,
        textAlign: 'center'
    },


});
export default SingleExercise;