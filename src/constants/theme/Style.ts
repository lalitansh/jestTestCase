import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {color} from './Color';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {image} from './Image';
import {size, font} from './Size';

const style = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  workingArea: {
    height: '100%',
    width: '100%',
    flex: 1,
    marginBottom: 0,
    backgroundColor: color.white,
  },
  navTopContainer: {
    width: '100%',
    flexDirection: 'column',
    height: '11%',
    justifyContent: 'center',
    backgroundColor: color.black,
  },
  navigationTitle: {
    justifyContent: 'center',
    fontSize: size.title,
    color: color.white,
    textAlign: 'center',
    fontFamily: font.medium,
  },
  onboardingImage: {
    width: '90%',
    height: '65%',
    resizeMode: 'contain',
  },
  asterisk: {
    color: color.red,
    fontSize: 15,
    marginTop: -2,
    marginLeft: 5,
  },
  textFieldHeading: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: color.title,
  },
  textFieldInput: {
    height: 44,
    marginTop: 0,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: color.seperator,
    paddingRight: 5,
    paddingLeft: 0,
    color: color.black,
    fontSize: 16,
  },
  uploadIcon: {
    height: 30,
    width: 30,
    marginLeft: 16,
    resizeMode: 'cover',
  },
  uploadText: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: color.uploadText,
  },
  image: {
    borderRadius: 8,
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  deleteImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 25,
    width: 25,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  imageCont: {
    height: 120,
    width: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelOuter: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 25,
    width: 25,
    justifyContent: 'center',
  },
  bottomButtonOuterView: {
    backgroundColor: color.white,
    padding: 0,
    ...ifIphoneX(
      {
        marginBottom: 50,
      },
      {
        marginBottom: 20,
      },
    ),
    flexDirection: 'row',
  },
  uploadCont: {
    height: 50,
    backgroundColor: color.uploadBG,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomMargin: {
    marginBottom: 10,
  },
  bigTitle: {
    fontSize: size.bigTitle,
    color: color.title,
    fontFamily: font.medium,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: size.subtile,
    color: color.subtile,
    fontFamily: font.default,
    fontWeight: '400',
  },
  defaultButton: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
    borderRadius: 8,
  },
  buttonTitle: {
    justifyContent: 'center',
    fontSize: size.subtile,
    fontFamily: font.medium,
    color: color.white,
    fontWeight: '500',
  },
  secButton: {
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.border,
  },
  secButtonTitle: {
    justifyContent: 'center',
    fontSize: size.subtile,
    fontFamily: font.medium,
    color: color.title,
    fontWeight: '500',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 0,
    ...ifIphoneX(
      {
        marginBottom: 30,
      },
      {
        marginBottom: 8,
      },
    ),
  },
  progressDialogBox: {
    borderRadius: 15,
    width: 80,
    height: 80,
    elevation: 0,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});

export default style;
