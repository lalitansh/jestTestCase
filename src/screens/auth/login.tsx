import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import CustomButton from '../../components/common/Button/button';
import TextField from '../../components/common/EditTextInput';
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';
import unset from 'lodash/unset';
import {color} from '../../constants/theme/Color';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import ProgressBarView from '../../components/ProgressBarView';
import SmsRetriever from 'react-native-sms-retriever';
import {CommonStyles} from '../../components/common/styles/commonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonHeader from '../../components/common/Header/commonHeader';

export type PropType = {
  navigation?: any;
};

const Login: React.FC<PropType> = props => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [isProgress, setIsProgress] = useState(false);

  const handleSetForm = (key, value) => {
    console.log('value, key', value, key);
    setForm({...form, [key]: value});
    unset(errors, key);
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  const validate = () => {
    let errors = {};
    const {phone} = form;

    if (isEmpty(phone)) {
      set(errors, 'phone', ['phone is required']);
    } else if (phone.length !== 10) {
      set(errors, 'phone', ['phone should be 10 digit.']);
    }
    return errors;
  };

  const onSave = () => {
    const {navigation} = props || {};
    let errors = validate();
    console.log('errors', errors);
    if (!isEmpty(errors)) {
      return setErrors(errors);
    }
    navigation.navigate('OtpMpin', {phone: form.phone});
    // setIsProgress(true);
    // auth()
    //   .signInWithEmailAndPassword(form.email, form.password)
    //   .then(() => {
    //     setIsProgress(false);
    //     props.navigation.dispatch(
    //       CommonActions.reset({
    //         index: 0,
    //         routes: [{name: 'Chat'}],
    //       }),
    //     );
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     setIsProgress(false);
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });
  };
  return (
    <View style={styles.flex1}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // translucent={true}
        backgroundColor={color.headerColor}
      />
      <CommonHeader
        backIcon
        title="Login"
        titleAlign="left"
        // titleBottomBack
        navigation={props.navigation}
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.mrVer50} />

        <View style={CommonStyles.headerTextView}>
          <Text style={{fontSize: 20}}>👋</Text>
          <Text style={CommonStyles.welcomeText}>Welcome Back</Text>
        </View>

        <View style={{flex: 0.7}}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Login</Text>
          </View>

          <TextField
            label={'Phone'}
            // placeholder={'Enter your email'}
            value={form.phone}
            keyboardType="phone-pad"
            name={'phone'}
            maxLength={10}
            errors={!isEmpty(errors) && errors}
            onChange={(value: string) => handleSetForm('phone', value)}
          />

          <View style={styles.customButton}>
            <CustomButton
              isPrimaryBack
              isWhiteText
              title={'Login'}
              onPress={() => onSave()}
            />
          </View>
        </View>
        <ProgressBarView visible={isProgress} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  flex1: {
    flex: 1,
  },
  text1: {
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    textAlign: 'center',
  },
  text2: {
    color: color.primary,
    fontWeight: 'bold',
  },
  mrVer50: {
    marginVertical: 20,
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
