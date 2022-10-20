import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import CustomeButton from '../../components/common/Button/button';
import TextField from '../../components/common/EditTextInput';
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';
import unset from 'lodash/unset';
import { color } from '../../constants/theme/Color';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';

export type PropType = {
  navigation?: any;
};

const Login: React.FC<PropType> = (props) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => { }, []);

  const handleSetForm = (key, value) => {
    console.log('value, key', value, key);
    setForm({ ...form, [key]: value });
    unset(errors, key);
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  const validate = () => {
    let errors = {};
    const { email, password } = form;

    let expInvailid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    let emailEmptyCheck = isEmpty(email);


    if (emailEmptyCheck) set(errors, 'email', ['email is required']);
    else if (!expInvailid) set(errors, 'email', ['Invalid email format']);

    if (isEmpty(password)) set(errors, 'password', ['password is required']);


    return errors;
  };

  const onSave = () => {
    let errors = validate();
    console.log('errors', errors);
    if (!isEmpty(errors)) return setErrors(errors);
    auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => {
        props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Products' }
            ]
          })
        )
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const navigation: any = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.mrVer50} />

      <View style={{ flex: 0.7 }}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Login</Text>
        </View>

        <TextField
          label={'EMAIL:'}
          placeholder={'Enter your email'}
          value={form.email}
          name={'email'}
          errors={!isEmpty(errors) && errors}
          onChange={(value: string) => handleSetForm('email', value)}
        />

        <TextField
          label={'PASSWORD:'}
          placeholder={'Enter your password'}
          keyboardType='email-address'
          value={form.password}
          secureTextEntry={true}
          name={'password'}
          errors={!isEmpty(errors) && errors}
          onChange={(value: string) => handleSetForm('password', value)}
        />

        <View style={styles.customButton}>
          <CustomeButton 
          isGreenBack
          title={'Login'} onPress={() => onSave()} />
          <Text style={{ alignItems: 'center', width: '100%', marginTop: 10, textAlign: 'center' }}>Don't have account?
            <Text style={{ color: 'red' }} onPress={() => props.navigation.navigate('Signup')}> Signup</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  mrVer50: {
    marginVertical: 50,
  },
  headerText: {
    top: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: color.black,
  },
  headerTextView: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
  },
  customButton: {
    width: '100%',
    paddingTop: 60,
  },
});

export default Login;
