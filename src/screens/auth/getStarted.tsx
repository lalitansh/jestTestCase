import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import style from '../../constants/theme/Style';
import {color} from '../../constants/theme/Color';
import {image} from '../../constants/theme/Image';
import {font} from '../../constants/theme/Size';
import {Message} from '../../constants/appConstant';
import SmsRetriever from 'react-native-sms-retriever';

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  // Get the phone number (first gif)
  _onPhoneNumberPressed = async () => {
    try {
      const phoneNumber = await SmsRetriever.requestPhoneNumber();
      console.log('phonenumber::', phoneNumber);
    } catch (error) {
      console.log('err', JSON.stringify(error));
    }
  };

  goToLogin = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  goToSignUp = () => {
    const {navigation} = this.props;
    navigation.navigate('Signup');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: color.white}}>
        <View style={{height: '45%', width: '100%'}}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={image.getStarted}
          />
        </View>
        <View
          style={{
            height: '45%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(32, 32, 32, 0.8)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image style={{height: 80, width: 80}} source={image.white_logo} />
          <Text style={[style.navigationTitle, {marginTop: 27}]}>
            {Message.certifiedInspect}
          </Text>
        </View>
        <View style={{marginTop: 48, alignItems: 'center', width: '100%'}}>
          <Text style={style.bigTitle}>{Message.letGetStarted}</Text>
          <Text style={[style.subtitle, {marginTop: 12, textAlign: 'center'}]}>
            {Message.toBegin}
          </Text>
        </View>
        <View style={{marginTop: 48, marginLeft: 20, marginRight: 20}}>
          <TouchableOpacity
            onPress={this._onPhoneNumberPressed.bind(this)}
            style={style.defaultButton}>
            <Text style={[style.buttonTitle]}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.goToSignUp.bind(this)}
            style={[style.secButton, {marginTop: 12}]}>
            <Text style={[style.secButtonTitle]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={[style.bottomView, {alignItems: 'center'}]}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                style.subtitle,
                {fontSize: 12, fontWeight: '400', textAlign: 'center'},
              ]}>
              {Message.dontHaveAccount}
            </Text>
            <TouchableOpacity onPress={this.goToSignUp.bind(this)}>
              <Text
                style={[
                  style.subtitle,
                  {
                    fontSize: 12,
                    fontWeight: '400',
                    textAlign: 'center',
                    color: color.primary,
                  },
                ]}>
                {Message.requestAnInvite}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
