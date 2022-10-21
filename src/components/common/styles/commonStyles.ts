import {StyleSheet} from 'react-native';
import {color} from '../../../constants/theme/Color';
import {font} from '../../../constants/theme/Size';

const CommonFontFamily = StyleSheet.create({
  medium: {
    fontFamily: font.medium,
  },
  default: {
    fontFamily: font.default,
  },
  bold: {
    fontFamily: font.bold,
  },
  light: {
    fontFamily: font.light,
  },
  regular: {
    fontFamily: font.regular,
  },
  extrabold: {
    fontFamily: font.extrabold,
  },
  black: {
    fontFamily: font.black,
  },
  semibold: {
    fontFamily: font.semibold,
  },
});

const CommonStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: color.white,
  },
  mainDullContainer: {
    flex: 1,
    backgroundColor: color.defaultBackGrey,
    paddingBottom: 60,
  },
  mainDullContainer1: {
    flex: 1,
    backgroundColor: color.defaultBackGrey,
    // paddingBottom: 80
  },
  backWhite: {
    backgroundColor: color.white,
  },
  linkText: {
    fontSize: 12,
    color: color.primary,
    // ...CommonFontFamily.medium
  },
  dullTitleText: {
    fontWeight: '500',
    color: 'grey',
    fontSize: 12,
    // ...CommonFontFamily.medium
  },
  normalTitleText: {
    fontWeight: '500',
    color: color.black,
    fontSize: 12,
    // ...CommonFontFamily.medium
  },
  primaryNormalTitleText: {
    fontWeight: '500',
    color: color.primary,
    fontSize: 13,
    // ...CommonFontFamily.medium
  },
  dullTitleTextLight: {
    color: color.subtile,
    lineHeight: 20,
    letterSpacing: 0.16,
    // ...CommonFontFamily.medium
  },
  linkTextWithLine: {
    fontSize: 11,
    color: color.primary,
    textDecorationLine: 'underline',
    // ...CommonFontFamily.medium
  },
  textSmall: {
    fontSize: 12,
    color: color.subtile,
    // ...CommonFontFamily.medium
  },
  commonMarginTop: {
    marginTop: 12,
  },
  tabImgStyle: {
    height: 16,
    width: 16,
  },
  welcomeText: {
    top: 10,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: color.black,
    // ...CommonFontFamily.medium
  },
  headerTextView: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 50,
    alignItems: 'center',
  },
  headerSignupView: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 18,
    alignItems: 'flex-start',
  },
  commonMarginTop15: {
    marginTop: 15,
  },
  commonButtonMarginTop: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: color.white,
    elevation: 2,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 1,
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
    // ...CommonFontFamily.medium
  },
  customButton: {
    width: '100%',
    paddingTop: 60,
  },
  bottomPart: {
    width: '100%',
    alignItems: 'center',
  },
  contentCenterStyling: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 22,
  },
});

const CommonTabStyles = StyleSheet.create({
  tabsContainerStyle: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  tabStyle: {
    //custom styles
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  tabTextStyle: {
    //custom styles
    ...CommonStyles.dullTitleText,
    fontWeight: '400',
    color: color.subtile,
    // ...CommonFontFamily.medium
  },
  activeTabStyle: {
    //custom styles
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  activeTabTextStyle: {
    //custom styles
    color: color.black,
    // ...CommonFontFamily.medium
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
});

export {CommonStyles, CommonTabStyles, CommonFontFamily};
