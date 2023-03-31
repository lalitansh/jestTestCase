import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
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
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'rn-material-ui-textfield';
import {image} from '../../constants/theme/Image';
import CommonHeader from '../../components/common/Header/commonHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const UserProfile: React.FC = () => {
  const arr = new Array(30).fill({
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  });

  const navigation = useNavigation();
  const [form, setForm] = useState({});

  const handleChange = (key, value) => {
    console.log('key value', key, value);
    setForm({...form, [key]: value});
    // console.log(`name = ${form.key}, value = ${form.value}`)
  };

  return (
    <View style={styles.container}>
      <CommonHeader
        backIcon
        title="Profile"
        titleBottomBack
        navigation={navigation}
      />
      <KeyboardAwareScrollView style={[styles.container, styles.paddingBottom]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{alignSelf: 'center', marginTop: 20}}
          onPress={() => alert('ok')}>
          <Image
            source={image.Granules1}
            style={{height: 100, width: 100, borderRadius: 50}}
          />
        </TouchableOpacity>

        <TextField
          label="Company"
          keyboardType="email-address"
          // formatText={formatText}
          // onSubmitEditing={onSubmit}
          // ref={fieldRef=>fieldRef}
          value={form.company}
          onChangeText={(value: string) => handleChange('company', value)}
          inputContainerStyle={styles.textInputContainer}
        />

        <TextField
          label="Name"
          keyboardType="email-address"
          // formatText={formatText}
          // onSubmitEditing={onSubmit}
          // ref={fieldRef=>fieldRef}
          value={form.name}
          onChangeText={(value: string) => handleChange('name', value)}
          inputContainerStyle={styles.textInputContainer}
        />
        <TextField
          label="Phone"
          keyboardType="phone-pad"
          // formatText={formatText}
          // onSubmitEditing={onSubmit}
          // ref={fieldRef=>fieldRef}
          value={form.phone}
          onChangeText={(value: string) => handleChange('phone', value)}
          inputContainerStyle={styles.textInputContainer}
        />

        <TextField
          label="Place"
          keyboardType="email-address"
          // formatText={formatText}
          // onSubmitEditing={onSubmit}
          // ref={fieldRef=>fieldRef}
          value={form.place}
          onChangeText={(value: string) => handleChange('place', value)}
          inputContainerStyle={styles.textInputContainer}
        />

        <TextField
          label="Email"
          keyboardType="email-address"
          // formatText={formatText}
          // onSubmitEditing={onSubmit}
          // ref={fieldRef=>fieldRef}
          value={form.email}
          onChangeText={(value: string) => handleChange('email', value)}
          inputContainerStyle={styles.textInputContainer}
        />

        <TextField
          label="GST"
          keyboardType="email-address"
          // formatText={formatText}
          // onSubmitEditing={onSubmit}
          // ref={fieldRef=>fieldRef}
          value={form.gst}
          onChangeText={(value: string) => handleChange('gst', value)}
          inputContainerStyle={styles.textInputContainer}
        />

        <TextField
          label="Working"
          keyboardType="email-address"
          // formatText={formatText}
          // onSubmitEditing={onSubmit}
          // ref={fieldRef=>fieldRef}
          value={form.working}
          onChangeText={(value: string) => handleChange('working', value)}
          inputContainerStyle={styles.textInputContainer}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  paddingBottom: {
    paddingBottom: 100,
  },
  textInputContainer: {
    marginTop: 10,
    alignSelf: 'center',
    marginHorizontal: 16,
  },
  marginTop5: {
    marginTop: 5,
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
