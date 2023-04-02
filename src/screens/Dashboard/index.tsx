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
import {getRandomItem} from '../../utils/functions/getters';
import CardThree from '../../components/common/CardComponent/CardThree';
import CardFour from '../../components/common/CardComponent/CardFour';
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
        height: screenHeight / 4.8,
        borderRadius: 8,
      }}>
      <Image
        key={`title${key}`}
        resizeMode={'stretch'}
        style={{height: '100%', width: screenWidth, borderRadius: 8}}
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

  const lightColors = [
    color.AntiqueWhite,
    color.CornSilk,
    color.LemonChiffon,
    color.LightGolder,
  ];

  useEffect(() => {
    // setIsProgress(true);
    // setTimeout(() => {
    //   setIsProgress(false);
    // }, 300);
  }, []);

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
      <View style={{backgroundColor: color.white}}>
        <LabelWithIcon
          // iconComponent={
          //   <Ionicons
          //     name="megaphone-outline"
          //     onPress={() => {}}
          //     color={color.black}
          //     size={32}
          //   />
          // }
          leftText="Latest News"
          rightText="View all"
        />
        <FlatList
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          testID="FlatList1"
          horizontal
          // numColumns={2}
          // columnWrapperStyle={{
          //   justifyContent: 'space-around',
          //   paddingHorizontal: 8,
          // }}
          contentContainerStyle={{
            paddingBottom: 16,
            paddingLeft: 16,
            backgroundColor: color.white,
          }}
          extraData={sliderData}
          data={sliderData}
          initialNumToRender={15}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({item}) => {
            const {id, image} = item || {};
            return (
              <View key={id} style={{}}>
                <CardThree item={image} />
                {/* <ListComponent id={id} onPress={() => {}} title={title} /> */}
              </View>
            );
          }}
        />
      </View>
    </>
  );

  return (
    <View style={[CommonStyles.mainContainer, CommonStyles.backWhite]}>
      <CommonHeader
        noBorder
        appLogo={image.polytrendLogo}
        //customStyle={{borderRadius: 0}}
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

      {/* <BlinkingDot /> */}

      {isProgress ? (
        <SkeletonEffect />
      ) : (
        <KeyboardAwareScrollView
          nestedScrollEnabled={true}
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={[styles.container, {paddingBottom: 42}]}
          testID="KeyboardAwareScrollView2">
          <View style={{backgroundColor: color.black, paddingVertical: 12}}>
            <MarqueeText
              style={{
                fontSize: 12,
                color: color.white,
                ...CommonFontFamily.medium,
              }}
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
              paddingBottom: 30,
              alignItems: 'center',
            }}>
            <SwiperFlatList
              autoplay
              autoplayDelay={2.5}
              autoplayLoop
              showPagination
              paginationStyleItem={{
                marginTop: 6,
                width: 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 3,
              }}
              autoplayLoopKeepAnimation={true}
              paginationActiveColor={color.primary}
              data={sliderData}
              index={2}
              contentContainerStyle={{
                width: screenWidth,
                alignItems: 'center',
              }}
              renderItem={({item, i}) => (
                <SliderBox id={i} image={item.image} />
              )}
            />
          </View>

          <View style={styles.ghostWhiteBg} />

          <View
            style={{
              backgroundColor: color.white,
              paddingBottom: 16,
            }}>
            <View style={styles.rowStyle}>
              <CellComponent
                // isPrimaryBack
                // isWhiteText
                title={'Buyers'}
                onPress={() => navigation.navigate('Buyers')}
                iconComponent={
                  <Ionicons
                    name="enter-outline"
                    onPress={() => {}}
                    color={color.themeGrey}
                    size={30}
                  />
                }
                customeStyle={{backgroundColor: color.LightPurple}}
                customButtonTextStyle={{color: color.purple1}}
              />
              <CellComponent
                // isPrimaryBack
                // isWhiteText
                title={'Sellers'}
                onPress={() => navigation.navigate('Sellers')}
                iconComponent={
                  <Ionicons
                    name="exit-outline"
                    onPress={() => {}}
                    color={color.themeGrey}
                    size={30}
                  />
                }
                customeStyle={{backgroundColor: color.LightPink}}
                customButtonTextStyle={{color: color.pink1}}
              />
            </View>
            <View style={[styles.rowStyle, styles.marginTop12]}>
              <CellComponent
                // isWhiteText
                title={'Additives'}
                onPress={() => Alert.alert('ok')}
                // customeStyle={{borderRadius: 5}}
                iconComponent={
                  <MCI
                    name="bookmark-plus-outline"
                    onPress={() => {}}
                    color={color.themeGrey}
                    size={30}
                  />
                }
                customeStyle={{backgroundColor: color.LightGreen}}
                customButtonTextStyle={{color: color.green1}}
              />
              <CellComponent
                // isWhiteText
                title={'Job work'}
                onPress={() => Alert.alert('ok')}
                // customeStyle={{borderRadius: 5}}
                iconComponent={
                  <MCI
                    name="shopping-outline"
                    onPress={() => {}}
                    color={color.themeGrey}
                    size={30}
                  />
                }
                customeStyle={{backgroundColor: color.LightOrange}}
                customButtonTextStyle={{color: color.orange1}}
              />
            </View>
          </View>
          <View style={styles.ghostWhiteBg} />
          {LatestNews}
          <View style={styles.ghostWhiteBg} />
          <View style={{backgroundColor: color.white}}>
            <LabelWithIcon
              // iconComponent={
              //   <MCI
              //     name="image-edit-outline"
              //     onPress={() => {}}
              //     color={color.black}
              //     size={32}
              //   />
              // }
              customButtonParentStyle={{marginTop: 16}}
              leftText="Recent Post"
            />

            <FlatList
              nestedScrollEnabled={true}
              showsHorizontalScrollIndicator={false}
              testID="FlatList1"
              contentContainerStyle={{
                paddingBottom: 16,
              }}
              extraData={RecentPostData}
              data={RecentPostData}
              horizontal
              initialNumToRender={15}
              keyExtractor={(item, i) => i.toString()}
              renderItem={({item}) => {
                const {id, location, image, stone} = item || {};
                return <CardFour item={item} />;
              }}
            />
          </View>
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
