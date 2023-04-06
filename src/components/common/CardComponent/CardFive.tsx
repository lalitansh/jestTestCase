import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  SafeAreaView,
  Dimensions,
  NativeScrollEvent,
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { image } from '../../../constants/theme/Image';
import { color } from '../../../constants/theme/Color';
import FA5 from 'react-native-vector-icons/FontAwesome5'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonFontFamily } from '../styles/commonStyles';

const CardFive: React.FC = props => {
  const {item = {}, navigation = {}, onPress} = props || {};
  const {company, sellerName, phone, mail, location} = item || {};

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
      <View style={styles.scrollContent}>
        <View style={{}}>
          <View style={{}}>
          <View style={styles.rowStyle1}>
            <View style={styles.iconContainer}>
            <MCI
              name="city-variant"
              onPress={() => {}}
              color={color.themeGrey}
              size={22}
              style={styles.marginR5}
            />
            </View>
            <View style={styles.flex1}/>
            <View style={styles.textContainer}>
              <Text style={styles.textStyles1}>{company}</Text>
              </View>
            </View>
            
            
            <View style={styles.rowStyle1}>
            <View style={styles.iconContainer}>
            <FA5
              name="user"
              onPress={() => {}}
              color={color.themeGrey}
              size={22}
              style={styles.marginR5}
            />
            </View>
            <View style={styles.flex1}/>
              
              <View style={styles.textContainer}>
              <Text style={styles.textStyles1}>{sellerName}</Text>
              </View>
            </View>
            <View style={styles.rowStyle1}>
            <View style={styles.iconContainer}>
            <MCI
              name="phone"
              onPress={() => {}}
              color={color.themeGrey}
              size={22}
              style={styles.marginR5}
            />
            </View>
            <View style={styles.flex1}/>
              <View style={styles.textContainer}>
              <Text style={styles.textStyles1}>{phone}</Text>
              </View>
            </View><View style={styles.rowStyle1}>
            <View style={styles.iconContainer}>
            <MCI
              name="email"
              onPress={() => {}}
              color={color.themeGrey}
              size={22}
              style={styles.marginR5}
            />
            </View>
            <View style={styles.flex1}/>
              <View style={styles.textContainer}>
              <Text style={styles.textStyles1}>{mail}</Text>
              </View>
            </View><View style={styles.rowStyle1}>
            <View style={styles.iconContainer}>
            <FA5
              name="map-marker-alt"
              onPress={() => {}}
              color={color.themeGrey}
              size={22}
              style={styles.marginR5}
            />
            </View>
            <View style={styles.flex1}/>
              <View style={styles.textContainer}>
              <Text style={styles.textStyles1}>{location}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardFive;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  flex1: {
    flex: 0.03
  },
  marginTop5: {
    marginTop: 5,
  },
  textStyles: {
    fontSize: 18,
    color: 'black',
  },
  marginR5: {
    marginRight : 0
  },
  textStyles1: {
    ...CommonFontFamily.medium,
    color: color.headerColor,
    // fontWeight: '',
    fontSize: 14,
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 8
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowStyle: {
    flexDirection: 'row',
  },
  rowStyle1: {
    flexDirection: 'row',
    paddingTop: 8,
    alignItems: 'center',
  },
  imgStyles: {
    height: 100,
    width: '100%',
    margin: 5,
    // borderRadius: 16,
  },
  imgStyles1: {
    height: 10,
    width: 10,
    margin: 5,
    borderRadius: 1,
  },
  flex3: {
    flex: 0.32,
  },
  flex6: {
    flex: 0.6,
    paddingLeft: 20,
    paddingTop: 8,
  },

  imgSize: {
    height: 20,
    width: 20,
  },
  touchableBack: {
    left: 25,
    height: 50,
    width: 100,
    top: 16,
  },
  scrollContent: {
    marginVertical: 16,
    backgroundColor: 'white', //"#F2F1EC",
    paddingHorizontal: 16,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  whiteColorText: {
    color: 'white',
  },
});
