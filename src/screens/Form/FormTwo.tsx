// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/

// import React in our code
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';
import unset from 'lodash/unset';
import CommonHeader from '../../components/common/Header/commonHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextBox from '../../components/common/EditTextInput';
import CustomButton from '../../components/common/Button/button';

// Item array for the dropdown
const items = [
  // name key is must. It is to show the text in front
  {id: 1, name: 'angellist'},
  {id: 2, name: 'codepen'},
  {id: 3, name: 'envelope'},
  {id: 4, name: 'etsy'},
  {id: 5, name: 'facebook'},
  {id: 6, name: 'foursquare'},
  {id: 7, name: 'github-alt'},
  {id: 8, name: 'github'},
  {id: 9, name: 'gitlab'},
  {id: 10, name: 'instagram'},
];

// Item array for the dropdown
const colors = [
  // name key is must. It is to show the text in front
  {id: 1, name: 'black'},
  {id: 2, name: 'red'},
  {id: 3, name: 'blue'},
  {id: 4, name: 'yellow'},
  {id: 5, name: 'lightblue'},
  {id: 6, name: 'grey'},
  {id: 7, name: 'green'},
  {id: 8, name: 'lightgreen'},
];

const FormTwo = () => {
  // Data Source for the SearchableDropdown
  const [serverData, setServerData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItem1, setSelectedItem1] = useState('');
  const [colorItem, setColorItem] = useState('white');
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [isProgress, setIsProgress] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handleChange = (key, value) => {
    console.log('value, key', value, key);
    setForm({...form, [key]: value});
    unset(errors, key);
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  const validate = () => {
    let errors = {};
    const {phone} = form;

    if (isEmpty(phone)) {
      set(errors, 'phone', ['phone is required']);
    } else if (phone.length !== 10) {
      set(errors, 'phone', ['phone should be 10 digit.']);
    }
    return errors;
  };

  return (
    <View style={styles.flex1}>
      <CommonHeader
        backIcon
        title="Buy Post"
        titleBottomBack
        navigation={navigation}
      />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}>
        <View style={{paddingHorizontal: 16, marginTop: 16}}>
          <Text style={styles.textStyle}>Searchable1</Text>
          <SearchableDropdown
            onTextChange={text => console.log(text)}
            // Listner on the searchable input
            onItemSelect={item => setSelectedItem(item.name)}
            // Called after the selection
            //containerStyle={{padding: 5}}
            // Suggestion container style
            textInputStyle={styles.tiStyle}
            itemStyle={styles.itemStyle}
            itemTextStyle={styles.ittStyle}
            itemsContainerStyle={styles.itCStyle}
            items={items}
            // Mapping of item array
            defaultIndex={null}
            // Default selected item index
            placeholder={selectedItem ? selectedItem : 'Select Item'}
            // place holder for the search input
            resetValue={false}
            // Reset textInput Value with true and false state
            underlineColorAndroid="transparent"
            // To remove the underline from the android input
          />

          <Text style={[styles.textStyle, styles.marginTop5]}>Searchable2</Text>
          <SearchableDropdown
            onTextChange={text => console.log(text)}
            // Listner on the searchable input
            onItemSelect={item => setSelectedItem1(item.name)}
            // Called after the selection
            //containerStyle={{padding: 5}}
            // Suggestion container style
            textInputStyle={styles.tiStyle}
            itemStyle={styles.itemStyle}
            itemTextStyle={styles.ittStyle}
            itemsContainerStyle={styles.itCStyle}
            items={items}
            // Mapping of item array
            defaultIndex={null}
            // Default selected item index
            placeholder={selectedItem1 ? selectedItem1 : 'Select Item'}
            // place holder for the search input
            resetValue={false}
            // Reset textInput Value with true and false state
            underlineColorAndroid="transparent"
            // To remove the underline from the android input
          />

          <Text style={[styles.textStyle, styles.marginTop5]}>Color</Text>
          <SearchableDropdown
            onTextChange={text => console.log(text)}
            // Listner on the searchable input
            onItemSelect={item => setColorItem(item.name)}
            // Called after the selection
            //containerStyle={{padding: 5}}
            // Suggestion container style
            textInputStyle={styles.tiStyle}
            itemStyle={styles.itemStyle}
            itemTextStyle={styles.ittStyle}
            itemsContainerStyle={styles.itCStyle}
            items={colors}
            // Mapping of item array
            defaultIndex={null}
            // Default selected item index
            placeholder={colorItem ? colorItem : 'Select Item'}
            // place holder for the search input
            resetValue={false}
            // Reset textInput Value with true and false state
            underlineColorAndroid="transparent"
            // To remove the underline from the android input
          />

          <View style={[styles.round, {backgroundColor: colorItem}]} />

          <TextBox
            label={'Quantity'}
            // placeholder={'Enter your email'}
            value={form.quantity}
            suffix={'KG'}
            keyboardType="phone-pad"
            name={'phone'}
            maxLength={10}
            errors={!isEmpty(errors) && errors}
            onChange={(value: string) => handleChange('quantity', value)}
            inputContainerStyle={styles.textInputContainer1}
          />

          <TextBox
            label="Description"
            keyboardType="email-address"
            // formatText={formatText}
            // onSubmitEditing={onSubmit}
            // ref={fieldRef=>fieldRef}
            value={form.description}
            multiline={true}
            numberOfLines={3}
            maxLength={300}
            errors={!isEmpty(errors) && errors}
            onChange={(value: string) => handleChange('description', value)}
            inputContainerStyle={styles.textInputContainer1}
          />
        </View>

        <CustomButton
          isPrimaryBack
          isWhiteText
          title={'Submit'}
          onPress={() => {}}
          customeStyle={{marginTop: 24}}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default FormTwo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  flex1: {
    flex: 1,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tiStyle: {
    // Inserted text style
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white', //'#FAF7F6',
  },
  itemStyle: {
    padding: 10,
    marginTop: 2,
    backgroundColor: 'white', //'#FAF9F8',
    borderColor: '#bbb',
    borderWidth: 1,
  },
  ittStyle: {
    color: '#222',
  },
  itCStyle: {
    maxHeight: '100%',
  },
  round: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginTop: 16,
  },
  headingText: {
    padding: 8,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  textInputContainer: {
    marginTop: 10,
    alignSelf: 'center',
    marginHorizontal: 2,
  },
  textInputContainer1: {
    marginTop: 10,
    alignSelf: 'center',
    maxHeight: 100,
    marginHorizontal: 2,
  },
  marginTop5: {
    marginTop: 16,
  },
  textStyles: {
    fontSize: 18,
    color: 'black',
  },
  textStyles1: {
    fontSize: 12,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  rowStyle1: {
    flexDirection: 'row',
    paddingTop: 2,
  },
  imgStyles: {
    height: 150,
    width: '100%',
    margin: 5,
    borderRadius: 16,
  },
  imgStyles1: {
    height: 10,
    width: 10,
    margin: 5,
    borderRadius: 1,
  },
  flex3: {
    flex: 0.3,
  },
  flex6: {
    flex: 0.6,
    paddingLeft: 16,
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
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollContent: {
    marginTop: 16,
    backgroundColor: 'white', //"#F2F1EC",
    paddingHorizontal: 16,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    // marginLeft: 5
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
