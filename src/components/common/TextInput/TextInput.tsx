import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import isEmpty from 'lodash/isEmpty';
// import {Icon} from 'native-base';
import {color} from '../../../constants/theme/Color';
import {CommonStyles} from '../styles/commonStyles';
import {image} from '../../../constants/theme/Image';

export type Props = {
  errors: {};
  name: string;
  onChange?: any;
  onRef?: () => {};
  label: string;
  customStyle: {};
  customParentViewStyle: {};
  customStyling: {};
  isDullTitle: boolean;
  isDullColor: boolean;
  labelWithAlert: boolean;
  alertImage: string;
  onPressAlertImage: () => {};
  inputRef: any;
  secureTextEntry: boolean;
  keyboardType?: string;
  placeholder: string;
  placeholderTextColor: string;
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
  textAlignVertical?: number;
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
      label,
      customStyle,
      customParentViewStyle,
      customStyling,
      isDullTitle,
      isDullColor,
      labelWithAlert,
      alertImage,
      onPressAlertImage,
      inputRef,
      secureTextEntry,
      keyboardType,
      placeholder,
      placeholderTextColor,
      selectionColor,
      fontSize,
      multiline,
      maxLength,
      numberOfLines,
      backgroundColor,
      editable,
      value,
      minHeight,
      paddingLeft,
      maxHeight,
      textAlignVertical,
      ...props
    } = this.props;
    return (
      <>
        <View style={{marginVertical: 2}}>
          {label && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                numberOfLines={1}
                style={[
                  {
                    fontSize: 12,
                    paddingLeft: 15,
                    paddingRight: 5,
                    marginTop: 10,
                    marginBottom: 6,
                    color:
                      !isEmpty(errors) && !isEmpty(errors[name])
                        ? color.red
                        : color.black,
                  },
                  isDullTitle ? CommonStyles.dullTitleText : null,
                ]}
              >
                {label}
              </Text>
              {labelWithAlert && (
                <TouchableOpacity activeOpacity={1} onPress={onPressAlertImage}>
                  <Image
                    source={alertImage}
                    resizeMode="contain"
                    style={{height: 9, width: 9}}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}

          {
            <>
              <View
                style={[
                  {
                    flexDirection: 'row',
                    width: '95%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    // alignItems:'center',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor:
                      !isEmpty(errors) && !isEmpty(errors[name])
                        ? color.red
                        : 'black',
                    // backgroundColor: 'red',
                    paddingLeft: 10,
                  },
                  customParentViewStyle,
                ]}
              >
                {!isEmpty(errors) && !isEmpty(errors[name]) && (
                  <View
                    style={{
                      justifyContent: 'center',
                      marginTop: this.props.iconMarginTop,
                      alignItems: 'center',
                      paddingLeft: 15,
                      marginRight: 5,
                    }}
                  >
                    {/* <Icon type={this.props.icontype} name={this.props.iconname}
      style = {{fontSize : RFValue(20)}}
      /> */}
                    <Image
                      source={image.errorSign}
                      resizeMode="contain"
                      style={{height: 14, width: 14}}
                    />
                  </View>
                )}
                <TextInput
                  ref={inputRef}
                  keyboardType={keyboardType}
                  placeholder={placeholder}
                  placeholderTextColor={
                    placeholderTextColor ? placeholderTextColor : color.subtile
                  }
                  selectionColor={selectionColor ? selectionColor : '#167351'}
                  fontSize={fontSize}
                  multiline={multiline}
                  maxLength={maxLength}
                  numberOfLines={numberOfLines}
                  backgroundColor={backgroundColor}
                  editable={editable}
                  secureTextEntry={secureTextEntry}
                  onChangeText={onChange.bind(this)}
                  value={value}
                  style={[
                    {
                      width: '100%',
                      // borderRadius: 50,
                      minHeight: minHeight ? minHeight : 40,
                      paddingLeft: paddingLeft,
                      maxHeight: maxHeight ? maxHeight : 40,
                      textAlignVertical: textAlignVertical
                        ? textAlignVertical
                        : 'center',
                      fontSize: 14,
                      fontWeight: isDullColor ? '500' : null,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      color: isDullColor ? color.subtile : 'black',
                      paddingTop: Platform.OS === 'android' ? 13 : null,
                    },
                    customStyle,
                  ]}
                  {...props}
                />
              </View>

              <View>
                {!isEmpty(errors) && !isEmpty(errors[name]) && (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      marginVertical: 2,
                      marginLeft: 20,
                    }}
                  >
                    {errors[name][0]}
                  </Text>
                )}
              </View>
            </>
          }

          {/* </View> */}
        </View>
      </>
    );
  }
}

TextBox.defaultProps = {
  errors: [],
};
