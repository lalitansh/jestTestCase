import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { build, environment } from '../appConfiguration';
import { Platform } from 'react-native';
import Moment from 'moment';

import {
  Dimensions,
} from 'react-native';

//import { getNotificationBadgeSetting, setBadgeCount } from 'react-native-notification-badge';

var badgeCount = null;

export async function setData(key, value) {
  try {
    await AsyncStorage.setItem(key, value.toString())
  } catch (e) {
    // saving error
    console.log(e)
  }
}

export async function getData(key) {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    // error reading value
    console.log(e);
  }
}

export async function removeData(key) {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (e) {
    // error reading value
    console.log(e);
  }
}

export function setBadgeCountToTab(count) {
  if (count > 0) {
    badgeCount = count;
  }
  //setBadgeCountToIcon(count)
}

// export async function setBadgeCountToIcon(count) {
//   // const permission = await getNotificationBadgeSetting()
//   // console.log("permission: ", permission)
//   // if (permission === 'enabled') {
//   //   await setBadgeCount(count)
//   // } else {
//   //   console.log("Badge permission has not yet been granted. I'll ask the user later")
//   // }

//   firebase.notifications().setBadge(badgeCount);
// }

export function getBadgeCount() {
  return badgeCount;
}

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

const margins = {
  superSmall: 4,
  small: 8,
  medium: 10,
  large: 12
}

const AppConts = {
  deviceType: (Platform.OS === 'android') ? 'android' : 'ios',
  userType: 2, // customer
  googleAPIKey: 'AIzaSyAst9oCvLfJnq-xFM3w-aaYfR6Mo6m25qI',
  razoPayKey: (environment.build == 1) ? 'rzp_test_1hATxfDuLh9I4s' : 'rzp_live_JMAKreEuCGvchn'
}

const LocalKeys = {
  trueStr: 'true',
  falseStr: 'false',
  isOnboardingSeen: 'isOnboardingSeen',
  isFromSettings: 'isFromSettings',
  customer: 'customer',
  email: 'email',
  password: 'password',
  userData: 'userData',
  logout: 'logout',
  accessToken: 'accessToken',
  isMobileVerified: 'isMobileVerified',
  user: 'user',
  mobileVerifyed: "mobileVerifyed",
  sessionExpire: "sessionExpire",
}

const AlertText = {
  title: "Hygea",
  okButtonTitle: "OK",
  deleteButtonTitle: "Delete",
  cancelButtonTitle: "Cancel",
  confirmButtonTitle: "Confirm",
  continueButtonTitle: "Continue",
  editLocationTitle: "Edit Location",
  confirmBookingButtonTitle: "Confirm booking",
  photoLibrary: "Choose from Gallery",
  camera: "Take Photo",
  settingButtonTitle: "Settings",
  logoutTitle: 'Log Out',
  logoutSubtitle: 'Are you sure you want to logout?',
  logoutButton: 'Logout',

}

const Walkthrough = {
  on1Title: "Manage Your Inspections On\nYour Phone",
  on2Title: "Be Guided Through The\nProcess",
  on3Title: "Track Approvals &\nHistory",
  on1Message: "You can see your past inspections and be\nalerted when new requests are available.",
  on2Message: "The inspection wizard guides you through the\nexact process.",
  on3Message: "Track your past inspections for your own records."
}

const Message = {
  enterEmail: 'Please enter email',
  enterValidEmail: 'Please enter vaild email',
  certifiedInspect: 'CertifiedInspect',
  letGetStarted: 'Let’s get started',
  toBegin: 'To begin inspecting vehicles you will need to\nsign in with your details below.',
  dontHaveAccount: 'Don’t have an account? ',
  requestAnInvite: 'Request An Invite',
  logoutSuccess: 'successfully logged out'
}

const ComponentName = {
  onboarding: 'onboarding',
  GetStarted: 'GetStarted',
  login: 'Login',
  signUp: 'signUp',
  appWebView: 'appWebView',
  forgotPassword: 'forgotPassword',
  inspectorApp: 'InspectorApp',
}

const KeyboardType = {
  email: "email-address",
  numeric: 'numeric',
  numberPad: 'number-pad',
  phonePad: 'phone-pad',
  decimalPad: 'decimal-pad',
  default: 'default'
}

const ProgressSize = {
  zero: '0%',
  one: '10%',
  two: '20%',
  three: '30%',
  four: '40%',
  five: '50%',
  six: '60%',
  seven: '70%',
  eight: '80%',
  nine: '90%',
  ten: '100%',
}

export {
  AppConts, AlertText, Message,
  screenHeight, screenWidth, margins,
  Walkthrough, LocalKeys, ComponentName,
  KeyboardType, ProgressSize
}
