import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {PostDetailType} from './postDetail';
import CommonHeader from '../../components/common/Header/commonHeader';
import {CommonStyles} from '../../components/common/styles/commonStyles';
import {url} from '../../constants/apiConstant';
import {callGetApi} from '../../network/api';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ProgressBarView from '../../components/ProgressBarView';
import {color} from '../../constants/theme/Color';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Alert,
  ImageBackground,
} from 'react-native';
import {image} from '../../constants/theme/Image';
import style from '../../constants/theme/Style';
import SkeletonEffect from '../../components/common/SkeletonComponent';
import {screenHeight, screenWidth} from '../../constants/appConstant';
import {sliderData} from '../../utils/data';
const {height} = Dimensions.get('window');

export type PropType = {
  navigation?: any;
};

const SliderBox = ({key, image}) => {
  console.log(key, image);
  return (
    <View
      style={{
        width: screenWidth,
        borderRadius: 5,
        height: screenHeight / 4,
        paddingHorizontal: 20,
      }}>
      <ImageBackground
        key={`title${key}`}
        imageStyle={{borderRadius: 5}}
        resizeMode={'cover'}
        style={{height: '100%', width: '100%'}}
        source={image}
      />
    </View>
  );
};

const Dashboard: React.FC<PropType> = props => {
  const {navigation} = props || {};
  const [isProgress, setIsProgress] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    setIsProgress(true);
    callGetApi(`${url.posts}`)
      .then(response => {
        setIsProgress(false);
        console.log('response in screen--', response);
        if (response.valid) {
          setPosts(response.value);
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

  const onPressPost = (item: PostDetailType) => {
    const {navigation} = props || {};
    navigation.navigate('PostDetail', {item: item});
  };

  const logOutConfirmation = () => {
    Alert.alert(
      'Confirm!',
      'Are you sure you want to Logout from app.',
      [
        {text: 'Yes', onPress: onLogout},
        {text: 'No', onPress: () => {}, style: 'cancel'},
      ],
      {
        cancelable: true,
      },
    );
  };

  const onLogout = () => {
    setIsProgress(true);
    auth()
      .signOut()
      .then(() => {
        setIsProgress(false);
        console.log('logout success!');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          }),
        );
      })
      .catch(() => {
        setIsProgress(false);
      });
  };

  return (
    <View style={[CommonStyles.mainContainer, CommonStyles.backWhite]}>
      {/* <CommonHeader
        title={'Dashboard'}
        logOutIcon
        onPressLogout={logOutConfirmation}
      /> */}

      {isProgress ? (
        <SkeletonEffect />
      ) : (
        <KeyboardAwareScrollView
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
          testID="KeyboardAwareScrollView2">
          <SwiperFlatList
            autoplay
            autoplayDelay={2.5}
            autoplayLoop
            height={140}
            autoplayLoopKeepAnimation={true}
            //index={2}
            paginationStyle={{
              height: 10,
              width: 100,
              backgroundColor: 'red',
              color: 'green',
            }}
            paginationStyleItem={{height: 4, width: 4}}
            showPagination
            data={sliderData}
            renderItem={({item, i}) => <SliderBox id={i} image={item.image} />}
          />
          {/* <FlatList
            testID="FlatList1"
            contentContainerStyle={{width: '100%', alignSelf: 'center'}}
            extraData={posts}
            data={posts}
            initialNumToRender={15}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item}) => {
              const {
                id,
                body,
                title,
                avatar = 'https://dummyimage.com/300',
              } = item || {};
              return (
                <TouchableOpacity
                  onPress={() => onPressPost(item)}
                  activeOpacity={0.7}
                  style={styles.mainCard}>
                  <View style={styles.subView}>
                    <View style={styles.subView1}>
                      <Image style={styles.imgStyles} source={image.userImg} />
                    </View>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.textStyle} numberOfLines={1}>
                      {id}
                    </Text>
                    <Text style={styles.textStyle} numberOfLines={2}>
                      {title}
                    </Text>
                  </View>
                  <View style={styles.thirdView}>
                    <Feather name="chevron-right" size={23} />
                  </View>
                </TouchableOpacity>
              );
            }}
          /> */}
        </KeyboardAwareScrollView>
      )}

      {/* <ProgressBarView visible={isProgress} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: color.white,
  },
  mainCard: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
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
    backgroundColor: color.primaryMiddle,
    margin: 0.7,
    // borderRadius: 5,
    // justifyContent: 'space-between',
    alignSelf: 'center',
  },
  mainCard1: {
    justifyContent: 'center',
    marginRight: 20,
    alignItems: 'center',
  },
  subView: {
    flex: 0.2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 8,
    backgroundColor: color.primaryMiddle,
  },
  imgStyles: {
    height: '70%',
    width: '80%',
  },
  textView: {
    flex: 0.7,
    // width: '50%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: color.primaryMiddle,
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingRight: 20,
    paddingLeft: 10,
  },
  textView1: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: color.primaryMiddle,
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: color.black,
    fontWeight: 'bold',
    fontSize: 15,
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
  subView1: {
    height: 66,
    width: 66,
    borderRadius: 33,
    backgroundColor: color.primaryOff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thirdView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Dashboard;
