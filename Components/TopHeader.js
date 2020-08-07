import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function TopHeader(props) {
  return (
    <View>
        <View style={styles.saveAreaWrapper}>
          <TouchableOpacity onPress={props.saveSession} style={{flexDirection:'row'}}><Icon.Button name="check" size={30} color="#753cda" backgroundColor="#ffffff" /><Text style={styles.saveText}>Save session</Text></TouchableOpacity>
        </View>
      <Text style={{ textAlign: 'center' }}>Tu kiedys bedzie jakis bardzo ladny baner hehe</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  saveAreaWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    

  },
  saveText: {
    fontSize: 15,
    color: "#753cda",
    marginTop: 13,
    marginRight: 10,
    marginLeft: -15
  },
  test:{
  
  }

});

export default TopHeader;