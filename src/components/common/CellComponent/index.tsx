import React, { useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../../constants/theme/Color';
import { getRandomItem } from '../../../utils/functions/getters';
import {CommonFontFamily} from '../styles/commonStyles';

type propsType = {
  title: string;
  onPress?: () => void;
  customeStyle?: any;
  customButtonParentStyle?: any;
  customButtonTextStyle?: any;
  isWhiteText?: boolean;
  isDisabled?: boolean;
  buttonRef?: any;
  iconComponent?: JSX.Element;
};

const CellComponent: React.FC<propsType> = (props: propsType) => {
  const {
    title,
    onPress,
    customeStyle,
    customButtonParentStyle,
    customButtonTextStyle,
    isWhiteText,
    isDisabled,
    buttonRef,
    iconComponent,
  } = props;

  return (
    <View style={[styles.buttonParentView, customButtonParentStyle]}>
      <TouchableOpacity
        activeOpacity={0.8}
        ref={buttonRef}
        disabled={isDisabled}
        style={
          [
            // styles.buttonStyle,
            // isGreenBack ? styles.isGreenBackStyle : null,
            // isErrorStyle ? styles.isErrorStyle : null,
            // customeStyle,
          ]
        }
        onPress={onPress}>
<<<<<<< HEAD
        <LinearGradient
          colors={[color.transparent, color.transparent]}
=======
        <View
          // colors={[color.primaryOff, color.primaryMiddle, color.primary]}
>>>>>>> eace942672974fefe3c0f52a420c50b4d966ec76
          // start={{x: 0, y: 1}}
          // end={{x: 1, y: 1}}
          style={[styles.rowStyle, styles.buttonStyle, customeStyle]}>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {iconComponent}
          </View>
          <View style={{flex: 0.7}}>
            <Text
              style={[
                styles.buttonTextStyle,
                isWhiteText ? styles.iswhiteTextStyle : null,
                customButtonTextStyle,
              ]}>
              {title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParentView: {
<<<<<<< HEAD
    width: '49%',
=======
    width: '50%',
    paddingHorizontal: 14,
>>>>>>> eace942672974fefe3c0f52a420c50b4d966ec76
    // alignSelf: 'center',
    // padding: 1.5,
    //elevation: 5,
    // justifyContent: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
  },
  buttonStyle: {
<<<<<<< HEAD
    width: '97%',
=======
    width: '100%',
>>>>>>> eace942672974fefe3c0f52a420c50b4d966ec76
    // padding: 10,
    // justifyContent: ,
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 50,
    // alignSelf: 'center',
    paddingVertical: 10,
    elevation: 2,
    // height: '100%',
  },
  ButtonStyle: {
    width: '100%',
    // height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: color.DARKGRAY,
  },

  textColor: {
    color: color.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  iswhiteTextStyle: {
    color: color.white,
  },
  isGreenBackStyle: {
    backgroundColor: color.black,
  },
  isErrorStyle: {
    backgroundColor: color.red,
  },
  buttonTextStyle: {
    ...CommonFontFamily.regular,
    color: color.subtile,
    fontWeight: '500',
    fontSize: 18,
    // paddingLeft: 16,
  },
});

export default CellComponent;
