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
import MI from 'react-native-vector-icons/MaterialIcons';
import CardOne from '../../components/common/CardComponent/CardOne';
import CardTwo from '../../components/common/CardComponent/CardTwo';
import CommonHeader from '../../components/common/Header/commonHeader';
import ProductCard from '../../components/common/ProductCard';
import {CommonFontFamily} from '../../components/common/styles/commonStyles';
import {color} from '../../constants/theme/Color';
import {image} from '../../constants/theme/Image';
import {SellerData} from '../../utils/data';
import {PropType} from '../Dashboard';

const Sellers: React.FC<PropType> = props => {
  const {navigation = {}} = props || {};
  const ItemSeparator = <View style={styles.ghostWhiteBg} />;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.defaultBackGrey,
      }}>
      <CommonHeader
        backIcon
        title="Sellers"
        // titleAlign="left"
        // titleBottomBack
        navigation={navigation}
      />
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, i) => i.toString()}
          ItemSeparatorComponent={ItemSeparator}
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

const styles = StyleSheet.create({
  ghostWhiteBg: {
    backgroundColor: color.GhostWhite,
    height: 16,
  },
});

export default Sellers;
