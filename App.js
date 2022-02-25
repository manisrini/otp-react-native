import React, {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import PhoneNumber from './screens/PhoneNumber';
import VerifyCode from './screens/VerifyCode';
import Authenticated from './screens/Authenticated';
import {useDispatch} from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn(phoneNumber) {
    try {
      console.log(phoneNumber);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);

      setConfirm(confirmation);
    } catch (error) {
      alert('error');
    }
  }

  async function confirmVerificationCode(code) {
    try {
      await confirm.confirm(code);
      setConfirm(null);
      dispatch({
        type: 'over',
      });
    } catch (error) {
      alert('Invalid code');
    }
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) return <Authenticated />;

  if (confirm) return <VerifyCode onSubmit={confirmVerificationCode} />;

  return <PhoneNumber onSubmit={signIn} />;
}
