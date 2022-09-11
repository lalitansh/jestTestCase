import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {productDataType} from './productDetails';
import CommonHeader from '../../components/common/Header/commonHeader';
import {CommonStyles} from '../../components/common/styles/commonStyles';
import {url, accessToken} from '../../constants/apiConstant';
import {callGetApi} from '../../network/api';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ProgressBarView from '../../components/ProgressBarView';
import {color} from '../../constants/theme/Color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
const {height} = Dimensions.get('window');

export type PropType = {
  navigation?: any;
};

export type CategoryType = {
  name: string
};


const Products: React.FC<PropType> = (props) => {
  const {navigation} = props || {};
  const [isProgress, setIsProgress] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    const willFocusSubscription = navigation.addListener('focus', () => {
      getAllProducts();
    });

    return willFocusSubscription;
  }, []);

  const getAllCategories = () => {
    callGetApi(`${url.categories}`, accessToken)
      .then(response => {
        if (response.valid) {
          setCategories(response.value.categories);
        } else {
          if (response.value.errors) {
            setErrors(response.value.errors);
          }
        }
      })
      .catch(() => {});
  };

  const getAllProducts = () => {
    setIsProgress(true);
    callGetApi(`${url.products}`, accessToken)
      .then(response => {
        console.log('response----=====', response);
        if (response.valid) {
          setProductsData(response.value.products);
        } else {
          if (response.value.errors) {
            setErrors(response.value.errors);
          }
        }
        setIsProgress(false);
      })
      .catch(err => {
        setIsProgress(false);
        console.log('errorInspection1', err);
      });
  };

  const onPressProduct = (item: productDataType) => {
    const {navigation} = props || {};
    navigation.navigate('ProductDetails', {item: item});
  };

  const onSelectCategory = (item: CategoryType) => {
    setSelectedCat(item);
  };
  const categoryList = (
    <FlatList
      testID='KeyboardAwareScrollView1'
      contentContainerStyle={{paddingLeft: 10, marginBottom: 10,}}
      showsHorizontalScrollIndicator={false}
      extraData={categories}
      data={categories}
      keyExtractor={(item, i) => i.toString()}
      horizontal
      renderItem={({item}) => {
        const {name} = item || {};
        const {name: names} = selectedCat || {};
        return (
          <TouchableOpacity
            onPress={() => onSelectCategory(item)}
            activeOpacity={0.7}
            style={styles.mainCard1}
          >
            <View
              style={
                name === names
                  ? styles.selectCatTextView
                  : styles.textView1
              }
            >
              <Text
                style={
                  name === names
                    ? styles.selectCatTextStyle
                    : styles.textStyle1
                }
                numberOfLines={1}
              >
                {name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
  return (
    <TouchableOpacity
      style={[CommonStyles.mainContainer, CommonStyles.backWhite]}
    >
      <CommonHeader logo search />

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
        testID='KeyboardAwareScrollView2'
      >
        <FlatList
          testID='FlatList1'
          contentContainerStyle={{width: '100%'}}
          extraData={productsData}
          data={productsData}
          keyExtractor={(item, i) => i.toString()}
          numColumns={2}
          ListHeaderComponent={categoryList}
          renderItem={({item}) => {
            const {name, price, avatar} = item || {}
            return (
              <TouchableOpacity
                onPress={() => onPressProduct(item)}
                activeOpacity={0.7}
                style={styles.mainCard}
              >
                <View style={styles.subView}>
                  <Image style={styles.imgStyles} source={{uri: avatar}} />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.textStyle} numberOfLines={1}>
                    {name}
                  </Text>
                  <Text style={styles.textStyle} numberOfLines={1}>
                    $ {price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </KeyboardAwareScrollView>

      <ProgressBarView visible={isProgress} />
      <TouchableOpacity
        onPress={() => navigation.navigate('AddProduct')}
        activeOpacity={1}
        style={styles.buttonStyle}
      >
      <AntDesign 
      name = 'plus'
      size = {33}
      />
        {/* <Text style={{fontSize: 40, fontWeight: '400'}}>+</Text> */}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: color.defaultBackGrey,
  },
  mainCard: {
    height: height / 3.5,
    width: '47%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: 'center',
    // padding: 25
    backgroundColor: 'white',
    margin: 6,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  mainCard1: {
    justifyContent: 'center',
    marginRight: 20,
    alignItems: 'center',
  },
  subView: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imgStyles: {
    height: '70%',
    width: '60%',
    marginTop: 5,
  },
  textView: {
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: 'black',
    height: 55,
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingVertical: 5,
  },
  textView1: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  selectCatTextView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 20,
  },
  selectCatTextStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  textStyle1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center',
  },
  buttonStyle: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    right: 30,
    backgroundColor: 'white',
    elevation: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default Products;
