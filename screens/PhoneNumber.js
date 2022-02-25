import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function PhoneNumber(props) {
  const dispatch = useDispatch();
  const phn = useSelector(state => state.phoneNum);

  const handlePhoneNumber = ph => {
    console.log(ph);
    dispatch({
      type: 'setphNum',
      phnum: ph,
    });
  };

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.header1}>FREE</Text>
        <Text style={styles.header2}>Save Important Dates!</Text>
        <Text style={styles.header3}>
          Keep everything in one spot from passport to mixie warranty and we
          will never let you to forget
        </Text>
      </View>

      <Text style={styles.text}>
        To get started ,please enter your {'\n'} <Text>mobile number</Text>
      </Text>

      <TextInput
        autoFocus
        style={styles.input}
        value={phn}
        onChangeText={ph => handlePhoneNumber(ph)}
      />

      <View style={styles.btn}>
        <Button title="Generate OTP" onPress={() => props.onSubmit(phn)} />
      </View>

      <View>
        <Text>
          New to app?
          <Text
            style={{color: 'blue'}}
            onPress={() => Linking.openURL('http://google.com')}>
            Signup
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 25,
  },

  header2: {
    fontSize: 30,
    textAlign: 'center',
    margin: 5,
    padding: 5,
  },

  header3: {
    fontSize: 17,
    color: 'grey',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },

  screen: {
    flex: 1,
    paddingTop: '20%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    borderBottomColor: 'lightblue',
    color: 'black',
    fontWeight: '300',
    width: 160,
    fontSize: 20,
    marginTop: 25,
  },
  text: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },

  btn: {
    margin: 100,
    borderRadius: 15,
  },

  picker: {
    height: 50,
    width: 150,
  },
});
