import React, { Component } from 'react';
import { TextInput, View, Text, Dimensions, StyleSheet } from 'react-native';
import isEmpty from 'lodash/isEmpty';
// import {Icon} from 'native-base';
const { width, height } = Dimensions.get('window');
import { color } from "../../../constants/theme/Color"
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
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
  onChange?: ()=> void;
};

export type State = {};
export default class TextBox extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const { errors, name, onChange, onRef,
      editable, value, minHeight, marginTop,
      selectionColor, fontSize, multiline,
      paddingLeft, maxHeight,
      maxLength, numberOfLines, backgroundColor,
      keyboardType, placeholder, placeholderTextColor,
      textAlignVertical,
      label, customStyle, customStyling, ...forwaredProps } = this.props;
    console.log("props", this.props)
    return (
      <>
        {/* <LinearGradient> */}

        {label && <View>
          <Text style={{ paddingHorizontal: 20, marginVertical: 10, color: color.black, fontWeight: "500" }}>{label}</Text>
        </View>}

        {!customStyle ?
          <>
            <LinearGradient
              colors={[color.primary, color.primary]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientBorderStyle}
            >

              <View style={{
                flexDirection: 'row',
                width: "100%",
                justifyContent: "center",
                alignSelf: "center",
                paddingHorizontal: 20,
                borderRadius: 5,
                backgroundColor: 'white',
                textAlignVertical: textAlignVertical
              }}>

                {/* <View style={{justifyContent:"center",marginTop:this.props.iconMarginTop}}>
            <Icon type={this.props.icontype} name={this.props.iconname}
            style = {{fontSize : 20}}
            />
          </View> */}
                <TextInput
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
                  style={[customStyling, {
                    width: "100%", borderRadius: 50,
                    minHeight: minHeight ? minHeight : 50, marginTop: marginTop, maxHeight: maxHeight ? maxHeight : 50,
                    textAlignVertical: textAlignVertical,
                    fontSize: 13,
                    // backgroundColor:"red",
                    color: editable === true ? 'black' : 'black'
                  }]}
                  {...forwaredProps}
                />
              </View>

            </LinearGradient>


            <View>
              {!isEmpty(errors) && !isEmpty(errors[name]) && (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 12,
                    marginVertical: 2,
                    marginLeft: 20,
                    height: 20
                  }}>
                  {errors[name][0]}
                </Text>
              )}
            </View>
          </>
          :
          <>
            <View style={{
              flexDirection: 'row',
              width: "100%",
              justifyContent: "center",
              alignSelf: "center",
              paddingHorizontal: 20,
              borderRadius: 5,
              backgroundColor: 'white',
              textAlignVertical: this.props.textAlignVertical
            }}>

              {/* <View style={{justifyContent:"center",marginTop:this.props.iconMarginTop}}>
      <Icon type={this.props.icontype} name={this.props.iconname}
      style = {{fontSize : 20}}
      />
    </View> */}
              <TextInput
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
                style={[customStyle, {
                  width: "100%", borderRadius: 50,
                  minHeight: minHeight ? minHeight : 40, marginTop: marginTop, paddingLeft: paddingLeft, maxHeight: maxHeight ? maxHeight : 40,
                  marginTop: 5,
                  marginBottom: 5,
                  textAlignVertical: textAlignVertical,
                  fontSize: 13,
                  // backgroundColor:"red",
                  color: this.props.editable === true ? 'black' : 'black'
                }]}
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
                  }}>
                  {errors[name][0]}
                </Text>
              )}
            </View>

          </>


        }




        {/* </View> */}
      </>
    );
  }
}

TextBox.defaultProps = {
  errors: []
}

const styles = StyleSheet.create({
  gradientBorderStyle: {
    width: "90%",
    alignSelf: "center",
    padding: 1,
    borderRadius: 5,
    backgroundColor: "transparent"
  }
})