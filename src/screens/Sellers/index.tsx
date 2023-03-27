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
import CardOne from '../../components/common/Card/CardOne';
import CommonHeader from '../../components/common/Header/commonHeader';
import ProductCard from '../../components/common/ProductCard';
import {CommonFontFamily} from '../../components/common/styles/commonStyles';
import {color} from '../../constants/theme/Color';
import {image} from '../../constants/theme/Image';
import {SellerData} from '../../utils/data';
import {PropType} from '../Dashboard';

const Sellers: React.FC<PropType> = props => {
  const {navigation = {}} = props || {};

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: color.defaultBackGrey,
      }}>
      <CommonHeader
        backIcon
        title="Sellers"
        titleBottomBack
        navigation={navigation}
      />
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, i) => i.toString()}
          // numColumns={2}
          key={'h'}
          //horizontal={false}
          data={SellerData}
          //horizontal={true}
          contentContainerStyle={{paddingBottom: 100, marginTop: 20}}
          renderItem={({item, index}) => {
            return (
              <CardOne
                navigation={navigation}
                // onPressImage = {()=> this.props.navigation.navigate("AstroItemDetails", {item : item})}
                item={item}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Sellers;
