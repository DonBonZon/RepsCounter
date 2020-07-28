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
                        <Text style={styles.modalText}>Dodaj ćwiczenie</Text>
                        <TextInput onChangeText={(value) => {name=value} } placeholder="Nazwa ćwiczenia" style={styles.textInput}></TextInput>
                        <View style={styles.modalButtonsHolder}>
                            <TouchableOpacity onPress={props.hideModal} style={styles.modalButtonCancel} ><Text style={styles.modalButtonText}>Anuluj</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>props.addExcercise(name)} style={styles.modalButtonAdd}><Text style={styles.modalButtonText}>Dodaj</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <Text style={styles.text}>Dodaj ćwiczenie</Text>
                <Icon.Button onPress={props.showModal} underlayColor={''} name="plus-square" size={55} color="#753cda" backgroundColor="#ffffff" />
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
        color: "#753cda",
        fontSize: 30,
        marginRight: 15,
        fontWeight: "bold",
        textAlign: 'center'
    },
    textInput: {
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 16,
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
        fontSize: 20
    },
    modalButtonCancel: {
        padding: 5,
        borderColor: 'red',
        borderWidth: 3, 
        borderRadius: 8,
        margin: 20
    },
    modalButtonAdd: {
        padding: 5,
        borderColor: 'green',
        borderWidth: 3, 
        borderRadius: 8,
        margin: 20
    },
    modalText:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        margin: 20,
    },

});
export default AddExcercise;