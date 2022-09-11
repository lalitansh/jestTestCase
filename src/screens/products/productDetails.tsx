import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import CommonHeader from '../../components/common/Header/commonHeader';
import {CommonStyles} from '../../components/common/styles/commonStyles';
import {url, accessToken} from '../../constants/apiConstant';
import {callGetApi} from '../../network/api';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ProgressBarView from '../../components/ProgressBarView';
import {color} from '../../constants/theme/Color';
const {height} = Dimensions.get('window');

type PropTypes = {};

export type productDataType = {
  avatar: string;
  name: string;
  price: number;
  description: string;
}

const Products: React.FC<PropTypes> = (props: any) => {
  const [isProgress, setIsProgress] = useState(false);
  const [productsData, setProductsData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    const {item} = props.route.params || {};
    const {_id} = item || {};
    setIsProgress(true);
    callGetApi(`${url.products}/${_id}`, accessToken)
      .then(response => {
        console.log('res-------', response);
        if (response.valid) {
          setProductsData(response.value.product);
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

  const {avatar = '', name = '', price = 0, description = ''} =
    productsData || {};
  return (
    <View style={[CommonStyles.mainContainer, CommonStyles.backWhite]}>
      <CommonHeader />

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <View style={{justifyContent: 'space-between', flex: 1}}>
          <View
            style={{
              height: height / 2.5,
              width: '100%',
              backgroundColor: color.defaultBackGrey,
              alignItems: 'center',
            }}
          >
            <Image
              source={{uri: avatar}}
              style={{height: '50%', width: '70%'}}
            />
          </View>

          <View
            style={{
              flex: 1,
              marginTop: 30,
              backgroundColor: color.defaultBackGrey,
            }}
          >
            <View
              style={{
                backgroundColor: 'black',
                flex: 1,
                paddingHorizontal: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}
              >
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 30}}
                >
                  {name}
                </Text>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 15}}
                >
                  ${price}
                </Text>
              </View>

              <Text style={{color: 'white', marginTop: 35}}>
                ${description}
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <ProgressBarView visible={isProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: color.defaultBackGrey
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
});

export default Products;
