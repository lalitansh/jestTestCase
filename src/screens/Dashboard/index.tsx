import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {PostDetailType} from './postDetail';
import CommonHeader from '../../components/common/Header/commonHeader';
import {
  CommonFontFamily,
  CommonStyles,
} from '../../components/common/styles/commonStyles';
import {url} from '../../constants/apiConstant';
import {callGetApi} from '../../network/api';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ProgressBarView from '../../components/ProgressBarView';
import {color} from '../../constants/theme/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import MarqueeText from 'react-native-marquee';
import styles from './styles';

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
import {RecentPostData, sliderData} from '../../utils/data';
import CellComponent from '../../components/common/CellComponent';
import BlinkingDot from '../../components/common/BlinkingDot';
import LabelWithIcon from '../../components/common/LabelWithIcon';
import { getRandomItem } from '../../utils/functions/getters';
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
        // paddingHorizontal: 20,
      }}>
      <Image
        key={`title${key}`}
        imageStyle={{borderRadius: 5}}
        resizeMode={'cover'}
        style={{height: '100%', width: '100%', backgroundColor: 'green'}}
        source={image}
      />
    </View>
  );
};

const Dashboard: React.FC<PropType> = props => {
  const {navigation} = props || {};
  console.log('navigation--', navigation);
  const [isProgress, setIsProgress] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState({});

  const lightColors = [color.AntiqueWhite, color.CornSilk, color.LemonChiffon, color.LightGolder]

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
          const newArr = [...response.value].slice(0, 10);
          setPosts(newArr);
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

  const LatestNews = (
    <>
      <LabelWithIcon
        iconComponent={
          <Ionicons
            name="megaphone-outline"
            onPress={() => {}}
            color={color.black}
            size={32}
          />
        }
        leftText="Latest News"
        rightText="View all"
      />
      <FlatList
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        testID="FlatList1"
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          paddingHorizontal: 8,
        }}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
        extraData={posts}
        data={posts}
        initialNumToRender={15}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => {
          const {id, location, image, title} = item || {};
          return <ListComponent id={id} onPress={() => {}} title={title} />;
        }}
      />
    </>
  );

  return (
    <View style={[CommonStyles.mainContainer, CommonStyles.backWhite]}>
      <CommonHeader
        title={'Polytrend'}
        // logOutIcon
        // onPressLogout={logOutConfirmation}
        customRightComponent={
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FA5
              name="hand-holding-water"
              onPress={() => {}}
              color={color.white}
              size={18}
              style={{marginRight: 4}}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('OilImports')}>
              <Text style={styles.customRightText}>Oil-inr</Text>
            </TouchableOpacity>
          </View>
        }
        titleAlign="left"
        drawerIcon
        navigation={navigation}
      />
      <View
        style={{height: 50, backgroundColor: color.primary, paddingLeft: 16}}>
        <Text style={styles.textStyle1}>Home</Text>
      </View>

      {/* <BlinkingDot /> */}

      {isProgress ? (
        <SkeletonEffect />
      ) : (
        <KeyboardAwareScrollView
          nestedScrollEnabled={true}
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}
          testID="KeyboardAwareScrollView2">
          <SwiperFlatList
            autoplay
            autoplayDelay={2.5}
            autoplayLoop
            autoplayLoopKeepAnimation={true}
            data={sliderData}
            renderItem={({item, i}) => <SliderBox id={i} image={item.image} />}
          />

          <View style={{backgroundColor: color.black, paddingVertical: 12}}>
            <MarqueeText
              style={{fontSize: 18, color: color.white}}
              speed={0.3}
              marqueeOnStart={true}
              loop={true}
              delay={1000}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry and typesetting industry.
            </MarqueeText>
          </View>
          <View
            style={{
              backgroundColor: color.white,
              paddingBottom: 16,
            }}>
            <View style={styles.rowStyle}>
              <CellComponent
                // isGreenBack
                // isWhiteText
                title={'Buyers'}
                onPress={() => navigation.navigate('Buyers')}
                customeStyle={{borderRadius: 5, backgroundColor: getRandomItem(lightColors)}}
                iconComponent={
                  <Ionicons
                    name="enter-outline"
                    onPress={() => {}}
                    color={color.subtile}
                    size={50}
                  />
                }
              />
              <CellComponent
                // isGreenBack
                // isWhiteText
                title={'Sellers'}
                onPress={() => navigation.navigate('Sellers')}
                customeStyle={{borderRadius: 5, backgroundColor: getRandomItem(lightColors)}}
                iconComponent={
                  <Ionicons
                    name="exit-outline"
                    onPress={() => {}}
                    color={color.subtile}
                    size={50}
                  />
                }
              />
            </View>
            <View style={[styles.rowStyle, styles.marginTop12]}>
              <CellComponent
                // isWhiteText
                title={'Additives'}
                onPress={() => Alert.alert('ok')}
                customeStyle={{borderRadius: 5, backgroundColor: getRandomItem(lightColors)}}
                iconComponent={
                  <MCI
                    name="bookmark-plus-outline"
                    onPress={() => {}}
                    color={color.subtile}
                    size={50}
                  />
                }
              />
              <CellComponent
                // isWhiteText
                title={'Job work'}
                onPress={() => Alert.alert('ok')}
                customeStyle={{borderRadius: 5, backgroundColor: getRandomItem(lightColors)}}
                iconComponent={
                  <MCI
                    name="shopping-outline"
                    onPress={() => {}}
                    color={color.subtile}
                    size={50}
                  />
                }
              />
            </View>
          </View>
          {LatestNews}

          <LabelWithIcon
            iconComponent={
              <MCI
                name="image-edit-outline"
                onPress={() => {}}
                color={color.black}
                size={32}
              />
            }
            customButtonParentStyle={{marginTop: 16}}
            leftText="Recent Post"
          />

          <FlatList
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            testID="FlatList1"
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            extraData={RecentPostData}
            data={RecentPostData}
            horizontal
            initialNumToRender={15}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item}) => {
              const {id, location, image, stone} = item || {};
              return (
                <TouchableOpacity
                  onPress={() => {}}
                  activeOpacity={0.8}
                  style={styles.mainCard2}>
                  <ImageBackground
                    source={image}
                    resizeMode="stretch"
                    style={styles.stoneView}>
                    <View style={styles.stoneSubView}>
                      <Text style={[styles.textStyle2]}>{stone}</Text>
                      <Text style={[styles.textStyle2, {marginTop: 4}]}>
                        {location}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </KeyboardAwareScrollView>
      )}

      {/* <ProgressBarView visible={isProgress} /> */}
    </View>
  );
};

export default Dashboard;

const ListComponent = props => {
  const {
    id,
    body,
    title,
    avatar = 'https://dummyimage.com/300',
    onPress,
  } = props || {};
  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.8}
      style={[styles.mainCard2, {marginLeft: 0}]}>
      <ImageBackground
        source={image.splash}
        resizeMode="stretch"
        style={styles.stoneView1}>
        <View style={styles.stoneSubView1}>
          <Text numberOfLines={2} style={[styles.textStyle2, {marginTop: 4}]}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
