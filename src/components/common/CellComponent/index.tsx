import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {screenWidth} from '../../../constants/appConstant';
import {color} from '../../../constants/theme/Color';
import {getRandomItem} from '../../../utils/functions/getters';
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
            // isPrimaryBack ? styles.isPrimaryBackStyle : null,
            // isErrorStyle ? styles.isErrorStyle : null,
            // customeStyle,
          ]
        }
        onPress={onPress}>
        <View
          // colors={[color.primaryOff, color.primaryMiddle, color.primary]}
          // start={{x: 0, y: 1}}
          // end={{x: 1, y: 1}}
          style={{}}>
          <View style={[styles.buttonStyle, customeStyle]}>
            {iconComponent}
          </View>

          <View style={styles.view2}>
            <Text
              numberOfLines={2}
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
    borderRadius: 4,
    width: screenWidth / 6.5,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  view2: {
    alignItems: 'center',
    width: '100%',
    flex: 0.3,
    height: 50,
  },
  buttonStyle: {
    width: screenWidth / 6.5,
    borderRadius: 8,
    flex: 0.6,
    marginBottom: 8,
    // padding: 10,
    // justifyContent: ,
    // alignItems: 'center',
    backgroundColor: color.white,
    // borderRadius: 50,
    // alignSelf: 'center',
    // paddingVertical: 10,
    height: screenWidth / 6.5,

    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // elevation: 1,
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
  isPrimaryBackStyle: {
    backgroundColor: color.black,
  },
  isErrorStyle: {
    backgroundColor: color.red,
  },
  buttonTextStyle: {
    ...CommonFontFamily.semibold,
    color: color.subtile,
    fontWeight: '500',
    fontSize: 13.5,
    // paddingLeft: 16,
  },
});

export default CellComponent;
