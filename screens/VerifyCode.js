import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

export default function OTP(props) {

  const code = useSelector(state => state.code)
  console.log(code)
  const dispatch = useDispatch();
  const handleCode = (code) => {
    dispatch({
      type : 'code' , vcode : code
    })
    
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Enter OTP</Text>
      <TextInput
        autoFocus
        value={code}
        onChangeText={code => handleCode(code)}
        keyboardType="numeric"
        style={styles.input}
      />
   
      <Button title="Confirm OTP" onPress={() => props.onSubmit(code)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor : 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
    color : 'black'
  },
  text: {
    fontSize: 25,
  },
});