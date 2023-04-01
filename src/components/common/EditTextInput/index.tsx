import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import isEmpty from 'lodash/isEmpty';
// import {Icon} from 'native-base';
const {width, height} = Dimensions.get('window');
import {color} from '../../../constants/theme/Color';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {TextField, OutlinedTextField} from 'rn-material-ui-textfield';
// import console = require('console');

export type Props = {
  errors: [];
  name: string;
  onRef?: () => {};
  label: string;
  customStyle?: {};
  customStyling?: {};
  secureTextEntry?: boolean;
  keyboardType?: string;
  placeholder: string;
  placeholderTextColor?: string;
  selectionColor?: string;
  fontSize?: string;
  multiline?: boolean;
  maxLength?: number;
  numberOfLines?: number;
  backgroundColor?: string;
  editable?: boolean;
  value?: string;
  minHeight?: number;
  paddingLeft?: number;
  maxHeight?: number;
  textAlignVertical?: string;
  marginTop?: number;
  onChange?: () => void;
};

export type State = {};
export default class TextBox extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      errors,
      name,
      onChange,
      onRef,
      editable,
      value,
      minHeight,
      marginTop,
      selectionColor,
      fontSize,
      multiline,
      paddingLeft,
      maxHeight,
      maxLength,
      numberOfLines,
      backgroundColor,
      keyboardType,
      placeholder,
      placeholderTextColor,
      textAlignVertical,
      label,
      customStyle,
      customStyling,
      ...forwaredProps
    } = this.props;
    console.log('props', this.props);

    const inputContinerStyle = {
      marginHorizontal: 20,
      borderRadius: 50,
      // minHeight: minHeight ? minHeight : 50,
      marginTop: marginTop,
      // maxHeight: maxHeight ? maxHeight : 50,
      textAlignVertical: textAlignVertical,
      // fontSize: 13,
      alignSelf: 'center',
      // backgroundColor:"red",
      color: editable === true ? 'black' : 'black',
    };

    return (
      <>
        {/* <LinearGradient> */}

        {!customStyle ? (
          <>
            <TextField
              keyboardType={keyboardType}
              label={label}
              // placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              selectionColor={selectionColor}
              fontSize={fontSize}
              multiline={multiline}
              maxLength={maxLength}
              numberOfLines={numberOfLines}
              backgroundColor={backgroundColor}
              editable={editable}
              onChangeText={onChange.bind(this)}
              value={value}
              lineType="solid"
              disabledLineType="solid"
              labelOffset={{
                paddingBottom: 16,
              }}
              inputContainerStyle={[customStyling, inputContinerStyle]}
              tintColor={color.primary}
              {...forwaredProps}
            />

            <View>
              {!isEmpty(errors) && !isEmpty(errors[name]) && (
                <Text style={styles.errorStyle}>{errors[name][0]}</Text>
              )}
            </View>
          </>
        ) : (
          <>
            <TextField
              keyboardType={keyboardType}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              selectionColor={selectionColor}
              fontSize={fontSize}
              multiline={multiline}
              maxLength={maxLength}
              numberOfLines={numberOfLines}
              backgroundColor={backgroundColor}
              editable={editable}
              onChangeText={onChange.bind(this)}
              value={value}
              style={[customStyle, inputContinerStyle]}
              tintColor={color.primary}
            />

            <View>
              {!isEmpty(errors) && !isEmpty(errors[name]) && (
                <Text style={styles.errorStyle}>{errors[name][0]}</Text>
              )}
            </View>
          </>
        )}
      </>
    );
  }
}

TextBox.defaultProps = {
  errors: [],
};

const styles = StyleSheet.create({
  gradientBorderStyle: {
    width: '90%',
    alignSelf: 'center',
    padding: 1,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  errorStyle: {
    color: 'red',
    fontSize: 12,
    marginVertical: 2,
    marginLeft: 20,
  },
});
