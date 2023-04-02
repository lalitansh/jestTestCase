import {Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {color} from '../../../constants/theme/Color';
import {CommonFontFamily} from '../styles/commonStyles';

const styles = StyleSheet.create({
  commonFont: {
    ...CommonFontFamily.medium,
    color: color.white,
    fontSize: 18,
  },
  blackColor: {
    color: color.black,
  },
  noBorder: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textStyle1: {
    ...CommonFontFamily.regular,
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
  },
  marginTop8: {
    marginTop: 8,
  },
  mainView: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: color.headerColor,
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : undefined,
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  mainView1: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: color.primary,
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : undefined,
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  view1: {
    flex: 0.2,
  },
  view2: {
    flex: 0.8,
  },
  backClean: {
    backgroundColor: color.white,
  },
});

export default styles;
