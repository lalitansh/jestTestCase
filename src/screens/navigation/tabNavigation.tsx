import React, {lazy, useLayoutEffect, useState} from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../constants/theme/Color';
import BuyPost from '../BuyPost';
import Dashboard from '../Dashboard';
import SellPost from '../SellPost';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FormTwo from '../Form/FormTwo';
import JobPost from '../Form/JobPost';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import UserProfile from '../Form/Profile';
import {CommonFontFamily} from '../../components/common/styles/commonStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {screenWidth} from '../../constants/appConstant';
import News from '../News';
import CommonHeader from '../../components/common/Header/commonHeader';

const TopTabM = createMaterialTopTabNavigator();

function MyTopTabBar({state, descriptors, navigation, position}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop:
            Platform.OS === 'android' ? getStatusBarHeight() : undefined,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          console.log('label--', label);

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                height: 80,
                width: '100%',
                backgroundColor: color.white,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Animated.Text
                style={[styles.titleStyle, {fontSize: 14, color: color.black}]}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

function PostTopTab(props) {
  return (
    <>
      <CommonHeader
        // backIcon
        title="Post"
        // titleAlign="left"
        // titleBottomBack
        navigation={props.navigation}
      />
      <TopTabM.Navigator
        screenOptions={{
          tabBarLabelStyle: {color: color.headerColor},
          tabBarItemStyle: {width: screenWidth / 2},
          // tabBarStyle: {
          //   marginTop:
          //     Platform.OS === 'android' ? getStatusBarHeight() : undefined,
          //   justifyContent: 'space-around',
          // },
          tabBarIndicatorStyle: {
            backgroundColor: color.headerColor,
            height: 3,
          },
        }}>
        <TopTabM.Screen
          options={{tabBarLabel: 'Buy'}}
          name="Buy Post"
          component={FormTwo}
        />
        <TopTabM.Screen
          options={{tabBarLabel: 'Sell'}}
          name="Sell Post"
          component={FormTwo}
        />
      </TopTabM.Navigator>
    </>
  );
}

function JobTopTab(props) {
  return (
    <>
      <CommonHeader
        // backIcon
        title="Job Post"
        // titleAlign="left"
        // titleBottomBack
        navigation={props.navigation}
      />
      <TopTabM.Navigator
        screenOptions={{
          tabBarLabelStyle: {color: color.headerColor},
          tabBarItemStyle: {width: screenWidth / 2},
          // tabBarStyle: {
          //   marginTop:
          //     Platform.OS === 'android' ? getStatusBarHeight() : undefined,
          //   justifyContent: 'space-around',
          // },
          tabBarIndicatorStyle: {
            backgroundColor: color.headerColor,
            height: 3,
          },
        }}>
        <TopTabM.Screen
          options={{tabBarLabel: 'Give'}}
          name="Give Job"
          component={JobPost}
        />
        <TopTabM.Screen
          options={{tabBarLabel: 'Want'}}
          name="Want Job"
          component={JobPost}
        />
      </TopTabM.Navigator>
    </>
  );
}

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const [currentRoute, setCurrentRoute] = useState('Dashboard');
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';
    let size = null;
    switch (routeName) {
      case 'Dashboard':
        icon = 'home-outline';
        break;
      case 'Post':
        icon = 'shoppingcart';
        if (routeName === currentRoute) {
          return (
            <>
              <View style={styles.iconWrapperView}>
                <AntDesign
                  name={icon}
                  size={20}
                  color={routeName === currentRoute ? color.white : color.white}
                />
              </View>
              <Text style={styles.titleStyle}>{routeName}</Text>
            </>
          );
        } else {
          return (
            <AntDesign
              name={icon}
              size={25}
              color={routeName === currentRoute ? color.white : color.white}
            />
          );
        }

      case 'News':
        icon = 'page-previous-outline';
        size = 18;
        break;
      case 'Job Post':
        icon = 'briefcase-search-outline';
        size = 18;
        break;
      case 'Profile':
        icon = 'smile';

        if (routeName === currentRoute) {
          return (
            <>
              <View style={styles.iconWrapperView}>
                <Feather
                  name={icon}
                  size={20}
                  color={routeName === currentRoute ? color.white : color.white}
                />
              </View>
              <Text style={styles.titleStyle}>{routeName}</Text>
            </>
          );
        } else {
          return (
            <Feather
              name={icon}
              size={25}
              color={routeName === currentRoute ? color.white : color.white}
            />
          );
        }
      default:
        icon = 'cart-arrow-up';
        break;
    }

    return (
      <>
        {routeName === currentRoute ? (
          <>
            <View style={styles.iconWrapperView}>
              <MCI name={icon} size={size ? size : 25} color={color.white} />
            </View>
            <Text style={styles.titleStyle}>
              {routeName === 'Dashboard' ? 'Home' : routeName}
            </Text>
          </>
        ) : (
          <MCI
            name={icon}
            size={routeName === 'Dashboard' ? 30 : 23}
            color={color.white}
          />
        )}

        {/* <Text
          style={{
            color: routeName === selectedTab ? color.primary : color.black,
          }}>
          {routeName}
        </Text> */}
      </>
    );
  };

  return (
    <View style={[styles.cardElevation, {flexDirection: 'row'}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          setCurrentRoute(route.name);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.bottomBar}>
            {_renderIcon(route.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function MyTabs(props) {
  const {route, navigation} = props || {};
  // useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   if (routeName === 'Buy Post' || routeName === 'Sell Post') {
  //     navigation.setOptions({tabBarVisible: false});
  //   } else {
  //     navigation.setOptions({tabBarVisible: true});
  //   }
  // }, [navigation, route]);
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Post" component={PostTopTab} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Job Post" component={JobTopTab} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconWrapperView: {
    bottom: 23,
    padding: 10,
    borderRadius: 100,
    backgroundColor: color.headerColor,
    borderWidth: 3,
    borderColor: color.white,
  },
  titleStyle: {
    color: color.white,
    bottom: 18,
    fontSize: 12,
    ...CommonFontFamily.regular,
  },
  shawdow: {
    shadowColor: color.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {justifyContent: 'center', alignItems: 'center', flex: 1},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  cardElevation: {
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: color.headerColor,
    height: 50,
    // borderTopWidth: 2,
    // borderTopColor: color.defaultBackGrey,
  },
});
