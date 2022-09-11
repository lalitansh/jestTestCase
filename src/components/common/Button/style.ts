import {color} from '../../../constants/theme/Color';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  ButtonStyle: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: color.DARKGRAY,
  },

  textColor: {
    color: color.white,
    fontSize: 14,
    fontWeight:"bold"
  },
});
