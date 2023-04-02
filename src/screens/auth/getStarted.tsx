import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import style from '../../constants/theme/Style';
import {color} from '../../constants/theme/Color';
import {image} from '../../constants/theme/Image';
import {font} from '../../constants/theme/Size';
import {Message} from '../../constants/appConstant';

export default class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  goToLogin = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  goToSignUp = () => {
    const {navigation} = this.props;
    navigation.navigate('Signup');
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: color.white}}>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          // translucent={true}
          backgroundColor={color.transparent}
        />
        <View style={{height: '65%', width: '100%'}}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={image.splash}
          />
        </View>
        <View
          style={{
            height: '65%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(32, 32, 32, 0.8)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image style={{height: 80, width: 80}} source={image.white_logo} />
          <Text style={[style.navigationTitle, {marginTop: 27}]}>
            {Message.Polytrend}
          </Text>
        </View>
        <View style={[style.bottomView]}>
          <View style={{marginBottom: 48, alignItems: 'center', width: '100%'}}>
            <Text style={style.bigTitle}>{Message.letGetStarted}</Text>
            <Text
              style={[style.subtitle, {marginTop: 12, textAlign: 'center'}]}>
              {Message.toBegin}
            </Text>
          </View>
          <View style={{marginHorizontal: 20, paddingBottom: 16}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}
              style={style.defaultButton}>
              <Text style={[style.buttonTitle]}>Sign In</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.goToSignUp.bind(this)}
            style={[style.secButton, {marginTop: 12}]}>
            <Text style={[style.secButtonTitle]}>Sign Up</Text>
          </TouchableOpacity> */}
          </View>
        </View>
      </View>
    );
  }
}
