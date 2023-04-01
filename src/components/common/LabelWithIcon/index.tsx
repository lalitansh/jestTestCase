import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {color} from '../../../constants/theme/Color';
import {CommonFontFamily} from '../styles/commonStyles';

type propsType = {
  leftText?: string;
  rightText?: string;
  onPress?: () => void;
  customButtonParentStyle?: any;
  customButtonTextStyle?: any;
  isWhiteText?: boolean;
  isDisabled?: boolean;
  buttonRef?: any;
  iconComponent?: JSX.Element;
  customLeftStyleText?: any;
  customRightStyleText?: any;
};

const LabelWithIcon: React.FC<propsType> = (props: propsType) => {
  const {
    leftText,
    rightText,
    onPress,
    customLeftStyleText,
    customButtonParentStyle,
    customRightStyleText,
    isWhiteText,
    isDisabled,
    buttonRef,
    iconComponent,
  } = props;
  return (
    <View style={[styles.buttonParentView, customButtonParentStyle]}>
      <View
        style={{
          flex: 0.7,
          flexDirection: 'row',
          paddingLeft: 16,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        {iconComponent}
        <Text style={[styles.buttonTextStyle, customLeftStyleText]}>
          {leftText}
        </Text>
      </View>

      <View
        style={{
          flex: 0.3,
          alignItems: 'flex-end',
          paddingRight: 16,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          ref={buttonRef}
          disabled={isDisabled}
          style={{
            justifyContent: 'center',
          }}
          onPress={onPress}
        />
        <Text style={[styles.buttonTextStyle, customRightStyleText]}>
          {rightText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParentView: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: color.white,
    paddingVertical: 4,
  },
  buttonStyle: {
    width: '95%',
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.black,
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
    color: color.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  iswhiteTextStyle: {
    color: color.white,
  },
  isPrimaryBackStyle: {
    backgroundColor: color.black,
  },
  isErrorStyle: {
    backgroundColor: color.red,
  },
  buttonTextStyle: {
    ...CommonFontFamily.regular,
    color: color.black,
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 8,
  },
});

export default LabelWithIcon;
