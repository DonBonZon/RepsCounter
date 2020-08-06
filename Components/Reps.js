import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Reps(props) {
    return (
    
            <View style={styles.inputs}>
                <Icon.Button underlayColor={''} name="minus-square" size={55} color="black"  backgroundColor="#ffffff"  onPress={() => props.buttonMinusPress(props.parentId)}/>
                <TextInput value={props.item.toString()} style={styles.textInput} keyboardType='number-pad' onChangeText={(text) => props.onChangeText(text, props.index, props.parentId)}/>
                <Icon.Button underlayColor={''} name="plus-square" size={55} color="black"  backgroundColor="#ffffff"  onPress={() => props.buttonPlusPress(props.parentId)}/>
            </View>
    );
}

const styles = StyleSheet.create({
    inputs: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textInput: {
        width:45,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
        marginRight: 15,
        textAlign: 'center'
    },


});
export default Reps;