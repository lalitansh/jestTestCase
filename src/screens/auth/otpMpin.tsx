import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, Alert} from 'react-native';
import CustomButton from '../../components/common/Button/button';
import TextField from '../../components/common/EditTextInput';
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';
import unset from 'lodash/unset';
import {color} from '../../constants/theme/Color';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import ProgressBarView from '../../components/ProgressBarView';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CommonHeader from '../../components/common/Header/commonHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export type PropType = {
  navigation?: any;
};

const OtpMpin: React.FC<PropType> = props => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [isProgress, setIsProgress] = useState(false);
  const [code, setCode] = useState('0000');

  const handleSetForm = (key, value) => {
    console.log('value, key', value, key);
    setForm({...form, [key]: value});
    unset(errors, key);
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  const validate = () => {
    // let errors = {};
    // const {email, password} = form;

    // let expInvailid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    // let emailEmptyCheck = isEmpty(email);

    // if (emailEmptyCheck) {
    //   set(errors, 'email', ['email is required']);
    // } else if (!expInvailid) {
    //   set(errors, 'email', ['Invalid email format']);
    // }

    // if (isEmpty(password)) {
    //   set(errors, 'password', ['password is required']);
    // }

    // return errors;

    // set validation for otp and mpin
    return {};
  };

  const onResend = () => {
    Alert.alert('Work in progress....');
  };

  const onConfirm = () => {
    props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      }),
    );
    // let errors = validate();
    // console.log('errors', errors);
    // if (!isEmpty(errors)) {
    //   return setErrors(errors);
    // }
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
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.container}
      testID="KeyboardAwareScrollView2">
      <CommonHeader
        // title={'Posts'}
        backgroundClean
        backIcon
        navigation={props.navigation}
        // logOutIcon
        // onPressLogout={logOutConfirmation}
      />

      <View style={styles.mrVer50} />

      <View style={{flex: 0.7}}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Verification code</Text>
          <Text style={styles.headerText1}>
            We have sent the code verification to
            <Text style={styles.headerText2}>{' 98*****789 '}</Text>
          </Text>
        </View>

        <OTPInputView
          style={styles.otpParentView}
          pinCount={4}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => {
            setCode(code);
          }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          placeholderTextColor={color.black}
          selectionColor={color.black}
          // onCodeFilled={code => {
          //   console.log(`Code is ${code}, you are good to go!`);
          // }}
        />

        <View style={styles.customButton}>
          <CustomButton
            isGreenBack
            isWhiteText
            title={'Resend'}
            onPress={() => onResend()}
            customeStyle={{borderRadius: 0, backgroundColor: color.themeGrey}}
          />
          <CustomButton
            isGreenBack
            isWhiteText
            title={'Confirm'}
            onPress={() => onConfirm()}
            customeStyle={{borderRadius: 0, backgroundColor: color.primary}}
          />
        </View>
      </View>
      <ProgressBarView visible={isProgress} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
<<<<<<< HEAD
    backgroundColor: color.white
=======
    backgroundColor: color.white,
>>>>>>> eace942672974fefe3c0f52a420c50b4d966ec76
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
    marginVertical: 10,
  },
  headerText: {
    top: 10,
    fontSize: 16,
    fontWeight: '600',
    // textAlign: 'center',
    color: color.black,
  },
  headerText1: {
    top: 15,
    fontSize: 12,
    fontWeight: '600',
    // textAlign: 'center',
    color: 'grey',
  },
  headerText2: {
    fontSize: 12,
    fontWeight: '600',
    // textAlign: 'center',
    color: color.black,
  },
  headerText3: {
    fontSize: 12,
    fontWeight: '600',
    // textAlign: 'center',
    color: color.primaryMiddle,
  },
  headerTextView: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
  },
  customButton: {
    width: '50%',
    // paddingTop: 60,
    flexDirection: 'row',
  },
  borderStyleBase: {
    width: 40,
    height: 55,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: color.black,
    borderRadius: 5,
    color: color.black,
  },

  underlineStyleHighLighted: {
    borderColor: '#167351',
    borderWidth: 2,
  },
  otpParentView: {
    width: '80%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 30,
  },
});

export default OtpMpin;
