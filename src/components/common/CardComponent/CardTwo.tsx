import React from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {color} from '../../../constants/theme/Color';
import {CommonFontFamily} from '../styles/commonStyles';

const CardTwo = props => {
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
      style={[
        styles.container,
        //styles.marginTop10,
        styles.marginBottom16,
        styles.cardElevation,
      ]}>

<View style={styles.labelView}>
<Text style={styles.thirdPart}>{material}</Text>
<Text style={styles.textStyle1}>{item.description}</Text>
</View>
      {/* <View style={styles.rowStyle}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressImage}
          style={styles.firstPart}>
          <Image resizeMode="cover" source={image} style={styles.imgStyle} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressImage}
          style={styles.secondPart}>
          <Text style={styles.thirdPart}>{material}</Text>
        </TouchableOpacity>
      </View> */}

      <View style={[styles.rowStyle, styles.marginTop10]}>
        <View style={styles.flex5Center}>
          <View>
            <Text style={[styles.forthPart, styles.boldStyle]}>Material</Text>
          </View>
          <View style={styles.bottomBorder}>
            <Text style={styles.forthPart}>{material}</Text>
          </View>
        </View>

        <View style={styles.flex2} />

        <View style={styles.flex5Center}>
          <View>
            <Text style={[styles.forthPart, styles.boldStyle]}>Quantity </Text>
          </View>
          <View style={styles.bottomBorder}>
            <Text style={styles.forthPart}>{Quantity}</Text>
          </View>
        </View>
      </View>

      <View style={[styles.rowStyle, styles.marginTop10]}>
        <View style={styles.flex5Center}>
          <View>
            <Text style={[styles.forthPart, styles.boldStyle]}>Condition </Text>
          </View>
          <View style={styles.bottomBorder}>
            <Text style={styles.forthPart}>{condition}</Text>
          </View>
        </View>

        <View style={styles.flex2} />

        <View style={styles.flex5Center}>
          <View>
            <Text style={[styles.forthPart, styles.boldStyle]}>
              Material location
            </Text>
          </View>
          <View style={styles.bottomBorder}>
            <Text style={styles.forthPart}>{materialLocation}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  textStyle1: {
    fontSize: 12,
    ...CommonFontFamily.regular,
    color: color.headerColor,
    marginTop: 5,
  },
  cardElevation: {
    elevation: 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: color.white,
    // marginHorizontal: 16,
    paddingBottom: 16,
    // borderRadius: 16,
    paddingHorizontal: 8,
  },
  imgStyle: {
    backgroundColor: 'white',
    height: 80,
    width: 80,
    aspectRatio: 1,
    borderRadius: 100,
  },
  boldStyle: {
    fontWeight: 'bold',
  },
  marginTop10: {
    marginTop: 10,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  flex2: {
    flex: 0.1,
  },
  firstPart: {
    flex: 0.3,
    width: '100%',
    // borderRadius:100,

    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingTop: 16,
  },
  secondPart: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    paddingVertical: 10,

    flexDirection: 'column',
  },
  thirdPart: {
    color: color.subtile,
    textTransform: 'capitalize',

    fontWeight: '400',

    fontSize: 24,
    ...CommonFontFamily.bold,
  },
  flex5Center: {
    flex: 0.4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 16,
  },
  labelView: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  forthPart: {
    color: color.black,
    textTransform: 'capitalize',

    fontWeight: '400',

    fontSize: 15,
    ...CommonFontFamily.regular,
  },
  bottomBorder: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'grey',
    // paddingHorizontal: 5,
    width: '100%',
    paddingBottom: 8,
  },
});

//{
/* <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              marginVertical: 2,
              paddingHorizontal: 2,
            }}
          >
            <Text
              style={{
                color: color.black,
                textTransform: 'capitalize',

                fontWeight: '400',

                fontSize: 24,
                ...CommonFontFamily.bold,
              }}
            >
              {material}
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: 2,
            }}
          >
            <Text style={{color: color.black, ...CommonFontFamily.regular}}>
              Quantity: {Quantity}
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: 2,
            }}
          >
            <Text style={{color: color.black, ...CommonFontFamily.regular}}>
              {'Condition:'} {condition}
            </Text>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: 2,
            }}
          >
            <Text style={{color: color.black, ...CommonFontFamily.regular}}>
              {'Material Location:'} {materialLocation}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: 2,
            }}
          >
            <Text style={{color: color.black, ...CommonFontFamily.regular}}>
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
            backgroundColor: color.white,
            borderBottomColor: 'white',
            borderBottomWidth: 0.6,
          }}
        >
          <MI name="keyboard-arrow-right" color={color.white} size={30} />
        </TouchableOpacity> */
//}
