import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  Platform,
  Linking,
  AppState,
} from 'react-native';
import {StackActions, CommonActions} from '@react-navigation/native';
import {image} from '../../constants/theme/Image';
import {
  AppConts,
  setData,
  getData,
  removeData,
  Message,
  LocalKeys,
  ComponentName,
} from '../../constants/appConstant';
import NavigationService from '../../components/navigationService';
import {url} from '../../constants/apiConstant';
import {callPostApi, callGetApi} from '../../network/api';
import ProgressBarView from '../../components/ProgressBarView';
import EventBus from 'react-native-event-bus';
import Toast from 'react-native-simple-toast';
import DeviceInfo from 'react-native-device-info';
import {color} from '../../constants/theme/Color';
import {size} from '../../constants/theme/Size';
import style from '../../constants/theme/Style';

export default class Splash extends React.Component {
  state = {
    isProgress: false,
    appState: AppState.currentState,
  };

  userDetails = null;

  componentDidMount() {
    //AppState.addEventListener('change', this._handleAppStateChange);
    // this.checkForUpdate();

    EventBus.getInstance().addListener(
      LocalKeys.sessionExpire,
      (this.listener = data => {
        Toast.show(Message.sessionExpire);
        removeData(LocalKeys.userData);
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: ComponentName.GetStarted}],
          }),
        );
      }),
    );

    EventBus.getInstance().addListener(
      LocalKeys.logout,
      (this.listener = data => {
        var userId = '';
        var accessToken = '';

        getData(LocalKeys.userData).then(value => {
          console.log('logout userDataWithToken: ', value);
          var trueValue = JSON.parse(value);
          accessToken = trueValue.accessToken;

          const params = {
            accessToken: accessToken,
          };

          this.setState({isProgress: true});
          callPostApi(url.logout, params, accessToken).then(response => {
            this.setState({isProgress: false});
            if (response.valid) {
              Toast.show(Message.logoutSuccess);
              removeData(LocalKeys.userData);
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: ComponentName.GetStarted}],
                }),
              );
            }
          });
        });
      }),
    );

    setTimeout(() => {
      getData(LocalKeys.userData).then(value => {
        if (value != undefined && value != null && value != '') {
          this.userDetails = JSON.parse(value);
          console.log('userDeatils----', this.userDetails);
          if (this.userDetails && this.userDetails.mobile) {
            var user = this.userDetails;
            if (user.mobile && user.mobile !== '' && user.mobile !== null) {
              // go  to dashboard
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: ComponentName.inspectorApp}],
                }),
              );
            } else {
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: ComponentName.createProfile}],
                }),
              );
            }
          } else {
            console.log('else---1');
            this.checkForOnboarding();
          }
        } else {
          console.log('else---2');
          this.checkForOnboarding();
        }
      });
    }, 3000); /*<-- Time until it jumps to "signUp"*/
  }

  checkForOnboarding() {
    getData(LocalKeys.isOnboardingSeen).then(value => {
      if (
        value == null ||
        value == undefined ||
        value == '' ||
        value == false ||
        value == 'false'
      ) {
        this.goToOnboarding();
      } else {
        this.goToSingup();
        // this.goToOnboarding()
      }
    });
  }

  goToOnboarding() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {name: ComponentName.onboarding, params: {isFromSettings: false}},
        ],
      }),
    );
  }

  goToSingup() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {name: ComponentName.GetStarted, params: {isFromSettings: false}},
        ],
      }),
    );
  }

  _handleAppStateChange = nextAppState => {
    //Alert.alert("App State function call", nextAppState)
    console.log('this.state.appState', this.state.appState);
    if (nextAppState === 'active') {
      console.log('checkForUpdate call');
      this.checkForUpdate();
      // console.log('App has come to the foreground!');
      // NotificationManager.areNotificationsEnabled().then((e) => {
      // 	console.log("is Notifications On: ", e); //true or false
      // 	if (e == true) {
      // 		this.submitTokenAgain()
      // 	}
      // }).catch((e) => {
      // 	console.log(e);
      // })
    }
    this.setState({appState: nextAppState});
  };

  checkForUpdate() {
    getData(LocalKeys.userData).then(value => {
      var userObj = JSON.parse(value);
      accessToken = userObj.accessToken;

      if (accessToken) {
        callGetApi(url.versionCheck, accessToken).then(response => {
          console.log('response version check', response);

          if (response.valid) {
            var result = response.value.result;
            if (result && result.forceUpdate) {
              let versionString = DeviceInfo.getVersion();
              let version = parseFloat(versionString);
              if (Platform.OS === 'ios') {
                if (parseFloat(result.iosVersionCustomer) > version) {
                  var buttons = [
                    {
                      text: result.updateInfo.buttonLeft,
                      onPress: () =>
                        Linking.openURL(
                          'https://apps.apple.com/gb/app/hygea/id1321308031',
                        ).catch(err => Alert.alert('', '' + err)),
                    },
                  ];
                  if (
                    result.updateInfo.buttonRight != null &&
                    result.updateInfo.buttonRight != '' &&
                    result.updateInfo.buttonRight != undefined
                  ) {
                    buttons.push({
                      text: result.updateInfo.buttonRight,
                      onPress: () => this.logout(),
                    });
                  }
                  Alert.alert(
                    result.updateInfo.title,
                    result.updateInfo.description,
                    buttons,
                    {cancelable: false},
                  );
                }
              } else {
                if (parseFloat(result.androidVersion) > version) {
                  var buttons = [
                    {
                      text: result.updateInfo.buttonLeft,
                      onPress: () =>
                        Linking.openURL(
                          'https://play.google.com/store/apps/details?id=com.hygea.customer',
                        ).catch(err => Alert.alert('', '' + err)),
                    },
                  ];
                  if (
                    result.updateInfo.buttonRight != null &&
                    result.updateInfo.buttonRight != '' &&
                    result.updateInfo.buttonRight != undefined
                  ) {
                    buttons.push({
                      text: result.updateInfo.buttonRight,
                      onPress: () => this.logout(),
                    });
                  }
                  Alert.alert(
                    result.updateInfo.title,
                    result.updateInfo.descriptionAndroid,
                    buttons,
                    {cancelable: false},
                  );
                }
              }
            }
          }
        });
      }
    });
  }

  logout() {
    EventBus.getInstance().fireEvent(LocalKeys.logout);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={{height: 80, width: 80}} source={image.white_logo} />
        <Text style={[style.navigationTitle, {marginTop: 27}]}>
          CertifiedInspect
        </Text>

        <ProgressBarView visible={this.state.isProgress} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
