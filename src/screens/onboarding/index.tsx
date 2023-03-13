import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import style from '../../constants/theme/Style';
import {color} from '../../constants/theme/Color';
import {image} from '../../constants/theme/Image';
import {font} from '../../constants/theme/Size';
import {
  AppConts,
  setData,
  getData,
  Message,
  Walkthrough,
  LocalKeys,
  ComponentName,
} from '../../constants/appConstant';
import {StackActions, CommonActions} from '@react-navigation/native';

import AppIntroSlider from 'react-native-app-intro-slider';
import Toast from 'react-native-simple-toast';
import CustomeButton from '../../components/common/Button/button';
// import console = require('console');

export default class onboarding extends React.Component {
  constructor(props) {
    super(props);
  }

  _onDone = () => {
    const {route} = this.props;
    const {isFromSettings} = route.params;

    if (isFromSettings == true) {
      this.props.navigation.goBack(null);
      return true;
    } else {
      setData(LocalKeys.isOnboardingSeen, LocalKeys.trueStr);
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: ComponentName.GetStarted}],
        }),
      );
    }
  };

  _onNext = index => {
    this.AppIntroSlider.goToSlide(index + 1, true);
  };

  _renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '40%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                borderRadius: 5,
                flex: 0.3,
                height: 5,
                backgroundColor:
                  item.key === 1 ? color.primary : color.themeGrey,
              }}
            />
            <View
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                flex: 0.3,
                height: 5,
                backgroundColor:
                  item.key === 2 ? color.primary : color.themeGrey,
              }}
            />
            <View
              style={{
                borderRadius: 5,
                flex: 0.3,
                height: 5,
                backgroundColor:
                  item.key === 3 ? color.primary : color.themeGrey,
              }}
            />
          </View>
        </View>

        <View style={styles.image}>
          <Image
            source={item.image}
            style={[style.onboardingImage, {width: '100%', height: '100%'}]}
          />
        </View>
        <Text style={[item.titleStyles]}>{item.title}</Text>

        <View styles={{}}>
          <Text style={[item.subTitleStyles, {height: 60}]}>
            {item.subtitle}
          </Text>
        </View>
        <CustomeButton
          isWhiteText
          isGreenBack
          title={index === 2 ? 'Get Started' : 'Next'}
          onPress={() => (index === 2 ? this._onDone() : this._onNext(index))}
          customeStyle={{marginTop: 45}}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={[{backgroundColor: color.white, flex: 1}]}>
          {/* <Image source={image.logoOnBoarding} style = {style.topLogoImage} /> */}
          <AppIntroSlider
            ref={ref => (this.AppIntroSlider = ref)}
            data={[
              {
                key: 1,
                backgroundColor: color.white,
                image: image.splash,
                title: Walkthrough.on1Title,
                subtitle: Walkthrough.on1Message,
                titleStyles: styles.title,
                subTitleStyles: styles.text,
                imageContainerStyles: styles.image,
              },
              {
                key: 2,
                backgroundColor: color.white,
                image: image.splash,
                title: Walkthrough.on2Title,
                subtitle: Walkthrough.on2Message,
                titleStyles: styles.title,
                subTitleStyles: styles.text,
                imageContainerStyles: styles.image,
              },
              {
                key: 3,
                backgroundColor: color.white,
                image: image.splash,
                title: Walkthrough.on3Title,
                subtitle: Walkthrough.on3Message,
                titleStyles: styles.title,
                subTitleStyles: styles.text,
                imageContainerStyles: styles.image,
              },
            ]}
            onDone={this._onDone}
            showSkipButton={false}
            showNextButton={false}
            showDoneButton={false}
            bottomButton={true}
            renderItem={this._renderItem}
            doneLabel={'Get Started'}
            dotStyle={{backgroundColor: 'transparent'}}
            activeDotStyle={{backgroundColor: 'transparent'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: '45%',
    resizeMode: 'contain',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    fontFamily: font.default,
    color: color.subtile,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    marginTop: 15,
  },
  title: {
    fontFamily: font.default,
    fontSize: 20,
    fontWeight: '500',
    backgroundColor: 'transparent',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    marginTop: 60,
    color: color.title,
  },
});
