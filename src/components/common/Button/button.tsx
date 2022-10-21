import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {style} from './style';
import {color} from '../../../constants/theme/Color';

type propsType = {
  title: string;
  onPress?: () => void;
  customeStyle?: any;
  customButtonParentStyle?: any;
  customButtonTextStyle?: any;
  isGreenBack?: boolean;
  isErrorStyle?: boolean;
  isWhiteText?: boolean;
  isDisabled?: boolean;
  buttonRef?: any;
};

const CustomButton: React.FC<propsType> = (props: propsType) => {
  const {
    title,
    onPress,
    customeStyle,
    customButtonParentStyle,
    customButtonTextStyle,
    isWhiteText,
    isGreenBack,
    isErrorStyle,
    isDisabled,
    buttonRef,
  } = props;
  return (
    <View
      style={[styles.buttonParentView, customButtonParentStyle]}
    >
      <View style={style.ButtonStyle}>
        <TouchableOpacity
          ref={buttonRef}
          disabled={isDisabled}
          style={[
            styles.buttonStyle,
            isGreenBack ? styles.isGreenBackStyle : null,
            isErrorStyle ? styles.isErrorStyle : null,
            customeStyle,
          ]}
          onPress={onPress}
        >
          <Text
            style={[
              styles.buttonTextStyle,
              isWhiteText ? styles.iswhiteTextStyle : null,
              customButtonTextStyle,
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonParentView: {
    width: '100%',
    alignSelf: 'center',
    padding: 1.5,
  },
  buttonStyle: {
    width: '90%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.themeGrey,
    borderRadius: 10,
    height: '100%',
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
    color: color.subtile,
    fontWeight: '500',
  },
});

export default CustomButton;
