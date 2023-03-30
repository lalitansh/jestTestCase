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
import CommonHeader from '../../components/common/Header/commonHeader';
import ProductCard from '../../components/common/ProductCard';
import CardOne from '../../components/common/Card/CardOne';
import {color} from '../../constants/theme/Color';
import {image} from '../../constants/theme/Image';
import {SellerData} from '../../utils/data';
import {PropType} from '../Dashboard';

const Buyers: React.FC<PropType> = props => {
  const {navigation = {}} = props || {};

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.defaultBackGrey,
      }}>
      <CommonHeader
        backIcon
        title="Buyers"
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
          contentContainerStyle={{
            paddingBottom: 200,
            marginTop: 20,
            flexGrow: 1,
          }}
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
    </View>
  );
};

export default Buyers;
