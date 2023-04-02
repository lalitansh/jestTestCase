// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/

// import React in our code
import {useNavigation} from '@react-navigation/native';
import {
  FilledTextField,
  OutlinedTextField,
  TextField,
} from 'rn-material-ui-textfield';
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
import isEmpty from 'lodash/isEmpty';
import set from 'lodash/set';
import unset from 'lodash/unset';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import SearchableDropdown from 'react-native-searchable-dropdown';
import CommonHeader from '../../components/common/Header/commonHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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

const JobPost = () => {
  // Data Source for the SearchableDropdown
  const [serverData, setServerData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [colorItem, setColorItem] = useState('white');
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handleIndexChange = index => {
    setSelectedIndex(index);
  };

  const handleChange = (key, value) => {
    console.log('value, key', value, key);
    setForm({...form, [key]: value});
    unset(errors, key);
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  return (
    <View style={styles.flex1}>
      <CommonHeader
        backIcon
        title="Job Post"
        titleAlign="left"
        // titleBottomBack
        navigation={navigation}
      />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}>
        <View style={{paddingHorizontal: 16, paddingTop: 32}}>
          <SegmentedControlTab
            values={['First', 'Second']}
            selectedIndex={selectedIndex}
            onTabPress={handleIndexChange}
            tabStyle={{paddingVertical: 10, marginBottom: 24}}
          />

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

          <TextField
            label="Description"
            keyboardType="phone-pad"
            // formatText={formatText}
            // onSubmitEditing={onSubmit}
            // ref={fieldRef=>fieldRef}
            value={form.description}
            multiline
            maxLength={100}
            onChangeText={(value: string) => handleChange('description', value)}
            inputContainerStyle={styles.textInputContainer1}
          />
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
          <CustomButton
            isPrimaryBack
            isWhiteText
            title={'Submit'}
            onPress={() => {}}
            customeStyle={{}}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default JobPost;

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
  round: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginTop: 16,
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
    marginBottom: 24,
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
