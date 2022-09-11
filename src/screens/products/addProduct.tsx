import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CustomeButton from '../../components/common/Button/button';
import TextField from '../../components/common/TextInput/TextInput';
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';
import unset from 'lodash/unset';
import {color} from '../../constants/theme/Color';
import CommonHeader from '../../components/common/Header/commonHeader';
import {CommonStyles} from '../../components/common/styles/commonStyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {callPostApi, callGetApi} from '../../network/api';
import {url, accessToken} from '../../constants/apiConstant';
import ProgressBarView from '../../components/ProgressBarView';
import {checkEveryLength} from '../../utils/functions/getters';
import { CategoryType } from './products';

const AddProduct = (props: any) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [signupDone, setSignupDone] = useState(false);
  const [isProgress, setIsProgress] = useState(false);
  const [categories, setCategories] = useState([]);
  const nameInput = useRef(null);
  const priceInput = useRef(null);
  const descriptionInput = useRef(null);
  const imageInput = useRef(null);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    setIsProgress(true);
    callGetApi(`${url.categories}`, accessToken)
      .then(response => {
        setIsProgress(false);
        if (response.valid) {
          setCategories(response.value.categories);
        } else {
          if (response.value.errors) {
            setErrors(response.value.errors);
          }
        }
      })
      .catch(() => {
        setIsProgress(false);
      });
  };
  const handleSetForm = (key: string, value: any) => {
    console.log('value, key', value, key);
    setForm({...form, [key]: value});
    unset(errors, key);
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  const onSelectCategory = (item: CategoryType) => {
    handleSetForm('Category', item.name);
  };

  const Description = form.Description || '';
  const Price = form.Price || 0;
  const Name = form.Name || '';
  const Category = form.Category || '';
  const minimumFilled = checkEveryLength(Description, Price, Name, Category);

  const validate = () => {
    let errors = {};
    const {Description, Name, Price} = form;

    let emailEmptyCheck = isEmpty(Description);

    if (emailEmptyCheck) set(errors, 'Description', ['Email is required']);

    if (isEmpty(Name)) set(errors, 'Name', ['Name is required']);
    if (isEmpty(Price)) set(errors, 'Price', ['Price is required']);
    return errors;
  };

  const onSave = () => {
    let errors = validate();
    console.log('errors', errors);
    if (!isEmpty(errors)) return setErrors(errors);
    form.DeveloperEmail = 'lalitansh.sharma93@gmail.com';
    console.log('sentForm--', form);
    setIsProgress(true);
    callPostApi(url.products, form, accessToken)
      .then(response => {
        console.log('response API-', response);
        if (response.valid) {
          navigation.popToTop();
        } else {
          if (response.value.errors) {
            setErrors(response.value.errors);
          }
        }
        setIsProgress(false);
      })
      .catch(err => {
        setIsProgress(false);
        console.log('errorSignup', err);
      });
  };

  const navigation: any = useNavigation();
  return (
    <View style={[CommonStyles.mainContainer, CommonStyles.backWhite]}>
      <CommonHeader title={'Request An Account'} navigation={navigation} />

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <TextField
          isDullTitle
          label={'Name'}
          placeholder={'Product title'}
          value={form.Name}
          name={'Name'}
          returnKeyType="next"
          keyboardType="email-address"
          errors={!isEmpty(errors) && errors}
          onChange={(value: string) => handleSetForm('Name', value)}
          inputRef={nameInput}
          onSubmitEditing={() => priceInput.current.focus()}
        />

        <TextField
          isDullTitle
          label={'Price'}
          placeholder={'Price'}
          value={form.Price}
          name={'Price'}
          keyboardType="number-pad"
          maxLength={10}
          errors={!isEmpty(errors) && errors}
          inputRef={priceInput}
          onChange={(value: string) => handleSetForm('Price', value)}
          onSubmitEditing={() => descriptionInput.current.focus()}
        />

        <TextField
          isDullTitle
          label={'Description'}
          placeholder={'Description'}
          value={form.Description}
          name={'Description'}
          returnKeyType="next"
          keyboardType="email-address"
          minHeight={80}
          maxHeight={130}
          errors={!isEmpty(errors) && errors}
          onChange={(value: string) => handleSetForm('Description', value)}
          inputRef={descriptionInput}
          onSubmitEditing={() => imageInput.current.focus()}
        />

        <TextField
          isDullTitle
          label={'Image Link'}
          placeholder={'Image Link'}
          value={form.Avatar}
          name={'Avatar'}
          returnKeyType="next"
          keyboardType="email-address"
          errors={!isEmpty(errors) && errors}
          onChange={(value: string) => handleSetForm('Avatar', value)}
          inputRef={imageInput}
        />

        <View style={{width: '100%', paddingHorizontal: 10, marginTop: 10}}>
          <Text>Selected Category: {form.Category}</Text>

          <FlatList
            contentContainerStyle={{paddingLeft: 5, marginVertical: 10}}
            showsHorizontalScrollIndicator={false}
            extraData={categories}
            data={categories}
            keyExtractor={(item, i) => i.toString()}
            horizontal
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => onSelectCategory(item)}
                  activeOpacity={0.7}
                  style={styles.mainCard1}
                >
                  <View
                    style={
                      item.name === form.Category
                        ? styles.textView1
                        : styles.selectCatTextView
                    }
                  >
                    <Text
                      style={
                        item.name === form.Category
                          ? styles.textStyle1
                          : styles.selectCatTextStyle
                      }
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <CustomeButton
            isGreenBack={minimumFilled}
            isWhiteText={minimumFilled}
            isDisabled={!minimumFilled}
            title={'Add Product'}
            onPress={() => onSave()}
            customButtonParentStyle={{marginTop: 40, width: '30%'}}
          />
        </View>
      </KeyboardAwareScrollView>
      <ProgressBarView visible={isProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: color.defaultBackGrey,
  },
  mrVer50: {
    marginVertical: 50,
  },
  headerText: {
    top: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: color.black,
  },
  headerTextView: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
  },
  customButton: {
    width: '100%',
  },
  bottomPart: {
    width: '100%',
    alignItems: 'center',
  },
  selectCatTextView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1.5,
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
  textView1: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  mainCard1: {
    justifyContent: 'center',
    marginRight: 15,
    alignItems: 'center',
  },
});

export default AddProduct;
