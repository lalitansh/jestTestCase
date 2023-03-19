import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../../constants/theme/Color';
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
        <LinearGradient
          colors={[color.primaryOff, color.primaryMiddle, color.primary]}
          // start={{x: 0, y: 1}}
          // end={{x: 1, y: 1}}
          style={[styles.buttonStyle, customeStyle]}>
          <View style={{paddingVertical: 5}}>{iconComponent}</View>
          <View>
            <Text
              style={[
                styles.buttonTextStyle,
                isWhiteText ? styles.iswhiteTextStyle : null,
                customButtonTextStyle,
              ]}>
              {title}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParentView: {
    width: '47%',
    // alignSelf: 'center',
    // padding: 1.5,
    elevation: 5,
    // justifyContent: 'center',
  },
  buttonStyle: {
    width: '95%',
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.themeGrey,
    borderRadius: 10,
    alignSelf: 'center',
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
    fontSize: 20,
  },
});

export default CellComponent;
