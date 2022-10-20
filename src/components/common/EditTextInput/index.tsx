import React, {Component} from 'react';
import {TextInput, View, Text,Dimensions} from 'react-native';
import isEmpty from 'lodash/isEmpty';
// import {Icon} from 'native-base';
const {width, height} = Dimensions.get('window');
import {color} from "../../../constants/theme/Color"
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
// import console = require('console');


export default class TextBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {errors, name, onChange,onRef, label, customStyle, customStyling, ...forwaredProps} = this.props;
    console.log("props", this.props)
    return (
<>
      {/* <LinearGradient> */}

      {label && <View>
        <Text style = {{paddingHorizontal: 20,marginVertical:10, color:color.black, fontWeight:"500"}}>{label}</Text>
      </View>}

      {!customStyle ? 
      <>
        <LinearGradient
        colors = {[color.primary, color.primaryMiddle ]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style = {{width:"90%", alignSelf:"center", padding:1, borderRadius:5,  backgroundColor:"transparent" }}
          >

          <View style = {{flexDirection: 'row', 
            width:"100%",
            justifyContent:"center",
            alignSelf:"center",
            paddingHorizontal: 20,
            borderRadius:5,
            backgroundColor:'white',
            textAlignVertical:this.props.textAlignVertical}}>
          
          {/* <View style={{justifyContent:"center",marginTop:this.props.iconMarginTop}}>
            <Icon type={this.props.icontype} name={this.props.iconname}
            style = {{fontSize : 20}}
            />
          </View> */}
          <TextInput
            keyboardType = {this.props.keyboardType}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            selectionColor={this.props.selectionColor}
            fontSize={this.props.fontSize}
            multiline={this.props.multiline}
            maxLength={this.props.maxLength}
            numberOfLines={this.props.numberOfLines}
            backgroundColor={this.props.backgroundColor}
            editable = {this.props.editable}
            onChangeText={onChange.bind(this)}
            value={this.props.value}
            style={[customStyling,{
              width:"100%",borderRadius:50, 
              minHeight: this.props.minHeight ? this.props.minHeight : 50, marginTop: this.props.marginTop, paddingLeft: this.props.paddingLeft,  maxHeight: this.props.maxHeight ? this.props.maxHeight : 50,
              textAlignVertical: this.props.textAlignVertical,
              fontSize: 13,
              // backgroundColor:"red",
              color : this.props.editable === true ? 'black' : 'black' 
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
                height:20
              }}>
              {errors[name][0]}
            </Text>
          )}
        </View> 
        </>
        :
        <>
      <View style = {{flexDirection: 'row', 
      width:"100%",
      justifyContent:"center",
      alignSelf:"center",
      paddingHorizontal: 20,
      borderRadius:5,
      backgroundColor:'white',
      textAlignVertical:this.props.textAlignVertical}}>
    
    {/* <View style={{justifyContent:"center",marginTop:this.props.iconMarginTop}}>
      <Icon type={this.props.icontype} name={this.props.iconname}
      style = {{fontSize : 20}}
      />
    </View> */}
    <TextInput
      keyboardType = {this.props.keyboardType}
      placeholder={this.props.placeholder}
      placeholderTextColor={this.props.placeholderTextColor}
      selectionColor={this.props.selectionColor}
      fontSize={this.props.fontSize}
      multiline={this.props.multiline}
      maxLength={this.props.maxLength}
      numberOfLines={this.props.numberOfLines}
      backgroundColor={this.props.backgroundColor}
      editable = {this.props.editable}
      onChangeText={onChange.bind(this)}
      value={this.props.value}
      style={[customStyle,{
        width:"100%",borderRadius:50, 
        minHeight: this.props.minHeight ? this.props.minHeight : 40, marginTop: this.props.marginTop, paddingLeft: this.props.paddingLeft,  maxHeight: this.props.maxHeight ? this.props.maxHeight : 40,
        marginTop: 5,
        marginBottom: 5,
        textAlignVertical: this.props.textAlignVertical,
        fontSize: 13,
        // backgroundColor:"red",
        color : this.props.editable === true ? 'black' : 'black' 
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
  errors : []
}