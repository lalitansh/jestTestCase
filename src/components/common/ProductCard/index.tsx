import React from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import MI from 'react-native-vector-icons/MaterialIcons';
import CommonHeader from '../../../components/common/Header/commonHeader';
import {color} from '../../../constants/theme/Color';
import {image} from '../../../constants/theme/Image';
import {SellerData} from '../../../utils/data';
import {CommonFontFamily} from '../styles/commonStyles';

const ProductCard = props => {
  const {item, navigation, onPressImage, onPressDescription} = props || {};
  const {
    image,
    id,

    location,
    stone,
    materialLocation,
    material,
    Quantity,
    condition,
  } = item || {};
  console.log('item', item);
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressImage}
        style={{
          flex: 0.3,

          width: '100%',
          // borderRadius:100,
          backgroundColor: color.primaryBlue,
          borderBottomColor: 'white',
          borderBottomWidth: 0.6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          source={image}
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 100,
            aspectRatio: 1,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'white',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        onPress={onPressImage}
        style={{
          flex: 0.5,
          justifyContent: 'space-evenly',
          backgroundColor: color.primaryBlue,
          paddingVertical: 10,
          borderBottomColor: 'white',
          borderBottomWidth: 0.6,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 0.3,
            justifyContent: 'center',
            marginVertical: 2,
            paddingHorizontal: 2,
          }}>
          <Text
            style={{
              color: color.white,
              textTransform: 'capitalize',

              fontWeight: '400',

              fontSize: 24,
              ...CommonFontFamily.bold,
            }}>
            {material}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            marginTop: 2,
          }}>
          <Text style={{color: 'white', ...CommonFontFamily.regular}}>
            Quantity: {Quantity}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            marginTop: 2,
          }}>
          <Text style={{color: 'white', ...CommonFontFamily.regular}}>
            {'Condition:'} {condition}
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            marginTop: 2,
          }}>
          <Text style={{color: 'white', ...CommonFontFamily.regular}}>
            {'Material Location:'} {materialLocation}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            marginTop: 2,
          }}>
          <Text style={{color: 'white', ...CommonFontFamily.regular}}>
            {location}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        activeOpacity={1}
        style={{
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: color.primaryBlue,
          borderBottomColor: 'white',
          borderBottomWidth: 0.6,
        }}>
        <MI name="keyboard-arrow-right" color={color.white} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
