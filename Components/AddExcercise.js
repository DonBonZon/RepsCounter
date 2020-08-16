import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    Modal,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function AddExcercise(props) {
    let name ="";
    
    return (
        <TouchableHighlight underlayColor={''} onPress={props.showModal}>
            <View style={styles.wrap}>
                <Modal visible={props.modalState}>
                    <View style={styles.modalWrapper}>
                        <Text style={styles.modalText}>Add exercise</Text>
                        <TextInput onChangeText={(value) => {name=value} } placeholder="Exercise name" style={styles.textInput}></TextInput>
                        <View style={styles.modalButtonsHolder}>
                            <TouchableOpacity onPress={props.hideModal} style={styles.modalButtonCancel} ><Text style={styles.modalButtonText}>Cancel</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>props.addExcercise(name)} style={styles.modalButtonAdd}><Text style={styles.modalButtonText}>Add </Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Text style={styles.text}>Add exercise</Text>
                <Icon.Button onPress={props.showModal} underlayColor={''} name="plus-square" size={40} color="#753cda" backgroundColor="#ffffff" />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    wrap: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: "row"
    },
    text: {
        fontFamily:'Bangers-Regular',
        color: "#753cda",
        fontSize: 35,
        marginRight: 5,
        marginBottom:10,
        textAlign: 'center'
    },
    textInput: {
        fontFamily:'Bangers-Regular',
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    modalWrapper:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
    },
    modalButtonsHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    modalButtonText: {
        fontFamily:'Bangers-Regular',
        fontSize: 25,
        alignSelf: 'center',
        marginTop: -10,
        color:'white'
    },
    modalButtonCancel: {
        padding: 5,
        width: 110,
        height:40,     
        borderRadius: 8,
        margin: 20,
        backgroundColor:'red'
    },
    modalButtonAdd: {
        padding: 5,
        width: 110,
        height:40,
        borderRadius: 8,
        margin: 20,
        backgroundColor:'green'
    },
    modalText:{
        fontFamily:'Bangers-Regular',
        fontSize: 35,
        textAlign: 'center',
        margin: 20,
    },

});
export default AddExcercise;