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
                {(props.index == props.numOfElements-1) ?<Icon.Button underlayColor={''} name="minus-square" size={55} color="black"  backgroundColor="#ffffff"  onPress={() => props.buttonMinusPress(props.parentId)}/>:<View style={{width:75}}></View>/*<Icon.Button underlayColor={''} name="plus-square" size={55} color="white"  backgroundColor="#ffffff"/>*/}
                <TextInput value={props.item.toString()} style={styles.textInput} keyboardType='number-pad' onChangeText={(text) => props.onChangeText(text, props.index, props.parentId)}/>
                {(props.index == props.numOfElements-1) ? <Icon.Button underlayColor={''} name="plus-square" size={55} color="#753cda"  backgroundColor="#ffffff"  onPress={() => props.buttonPlusPress(props.parentId)}/>:<Icon.Button underlayColor={''} name="check-square" size={55} color="rgba(117, 60, 218, 0.35)"  backgroundColor="#ffffff"/>}
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