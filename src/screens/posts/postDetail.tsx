import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, Platform, ScrollView } from 'react-native';
import CommonHeader from '../../components/common/Header/commonHeader';
import { CommonStyles } from '../../components/common/styles/commonStyles';
import { url } from '../../constants/apiConstant';
import { callGetApi } from '../../network/api';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ProgressBarView from '../../components/ProgressBarView';
import { color } from '../../constants/theme/Color';
import { image } from '../../constants/theme/Image';
const { height } = Dimensions.get('window');

type PropTypes = {};

export type PostDetailType = {
  id: number;
  title: string;
  body: string;
}

const PostDetail: React.FC<PropTypes> = (props: any) => {
  const [isProgress, setIsProgress] = useState(false);
  const [postData, setPostData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    const { item } = props.route.params || {};
    const { id } = item || {};
    setIsProgress(true);
    callGetApi(`${url.postDetails}/${id}`)
      .then(response => {
        console.log('res------- 123', response);
        if (response.valid) {
          setPostData(response.value);
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

  const { id = 0, title = '', body = '' } =
    postData || {};
  return (
    <View style={CommonStyles.mainContainer}>
      <CommonHeader
        back
        navigation={props.navigation}
        title={'Post Detail'}
      />

      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        testID='KeyboardAwareScrollView3'
      >
        <View style={{ flex: 1 }}>
          <View
            style={[styles.container1, {flex: 0.3}]}
          >
            <Image
              resizeMode='contain'
              source={image.userImg}
              style={styles.fullImg}
            />

<View style={styles.subRightView}>
                  <Text
                    style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                  >
                    {id}
                  </Text>
                </View>
          </View>

            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, flex:0.7, paddingBottom: 100, backgroundColor: 'black', }}>


              <View
                style={{
                  backgroundColor: 'black',
                  paddingHorizontal: 20,
                  marginTop: -30
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 35,
                  }}
                >

                  <Text
                    style={styles.text1}
                  >
                    {title}
                  </Text>
                </View>

                <Text style={styles.text2}>
                  {body}
                </Text>

                
              </View>

            </ScrollView>
            

          
          
        </View>
        
      </KeyboardAwareScrollView>
      <ProgressBarView visible={isProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.white
  },
  fullImg: {
    height: '100%', width: '100%'
  },
  container1: {
    height: height / 3,
    width: '100%',
    backgroundColor: color.defaultBackGrey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  alignRight: {
    alignItems: 'flex-end',
    backgroundColor: color.black,
    paddingRight: 30,
  },
  text1: {
    color: 'white',
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    fontSize: 30
  },
  text2: {
    color: 'white',
    marginTop: 35,
    fontSize: 20,
    // fontFamily: 'Poppins-Regular'
  },
  subRightView: {
    height: 60,
    width: 50,
    // borderRadius: 25,
    backgroundColor: color.black,
    justifyContent: 'flex-end',
    paddingBottom: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    position: 'absolute',
    top: -15,
    left: 10,
    // bottom: Platform.OS === 'ios' ? height / 2.65 : height / 2.1,
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

export default PostDetail;
