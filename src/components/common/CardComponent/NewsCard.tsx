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
import {color} from '../../../constants/theme/Color';
import {RecentPostData, SellerData} from '../../../utils/data';
import CommonHeader from '../Header/commonHeader';
import {CommonFontFamily} from '../styles/commonStyles';
import moment from 'moment';
import {screenWidth} from '../../../constants/appConstant';

const NewsCard: React.FC = props => {
  const {item = {}, navigation = {}} = props || {};

  const arr = new Array(30).fill({
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  });

  return (
    <View style={styles.container}>
      <View style={styles.scrollContent}>
        <View style={styles.rowStyle}>
          <View style={styles.flex3}>
            <Image source={item.image} style={styles.imgStyles} />
          </View>
          <View style={styles.flex05} />
          <View style={styles.flex6}>
            <View style={[]}>
              <Text style={styles.textStyles1}>{item.description}</Text>
            </View>
            <View style={{justifyContent: 'flex-end', height: 30}}>
              <Text style={styles.dateTimeT}>
                {/* {moment
                  .utc('2019-12-04 12:00:24')
                  .local()
                  .startOf('seconds')
                  .fromNow()} */}
                {moment(item.dateTime).format('DD/MM/YYYY hh:mm A')}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  marginTop5: {
    marginTop: 5,
  },
  textStyles: {
    fontSize: 14,
    color: color.headerColor,
    ...CommonFontFamily.medium,
  },
  textStyles1: {
    fontSize: 12,
    ...CommonFontFamily.regular,
    color: color.headerColor,
  },
  dateTimeT: {
    fontSize: 10,
    ...CommonFontFamily.regular,
    // color: color.headerColor,
  },
  rowStyle: {
    flexDirection: 'row',
    // paddingHorizontal: 16,
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 8,
    borderColor: color.themeGrey,
    marginHorizontal: 8,
    // paddingHorizontal: 16,
    borderRadius: 10,
    // justifyContent: 'space-between',
  },
  rowStyle1: {
    flexDirection: 'row',
    paddingTop: 2,
  },
  imgStyles: {
    height: screenWidth / 5.5,
    width: screenWidth / 3.5,
    // margin: 5,
    borderRadius: 10,
  },
  ghostWhiteBg: {
    backgroundColor: color.GhostWhite,
    height: 16,
  },
  imgStyles1: {
    height: 10,
    width: 10,
    margin: 5,
    borderRadius: 1,
  },
  flex3: {
    flex: 0.35,
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    // paddingRight: 5,
  },
  flex05: {
    flex: 0.05,
  },
  flex6: {
    flex: 0.6,
    // paddingLeft: 16,
    // paddingTop: 8,
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
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollContent: {
    // marginVertical: 16,
    backgroundColor: 'white', //"#F2F1EC",
    // paddingHorizontal: 16,
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
