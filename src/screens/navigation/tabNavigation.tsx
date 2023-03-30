import React, {lazy, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../../constants/theme/Color';
import BuyPost from '../BuyPost';
import Dashboard from '../Dashboard';
import SellPost from '../SellPost';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Dashboard':
        icon = 'home-outline';
        break;
      case 'Buy Post':
        icon = 'cart-arrow-down';
        break;
      case 'Sell Post':
        icon = 'cart-arrow-up';
        break;
    }

    return (
      <>
        <MCI
          name={icon}
          size={routeName === 'Dashboard' ? 32 : 28}
          color={routeName === selectedTab ? color.primary : color.black}
        />
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

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Buy Post" component={BuyPost} />
      <Tab.Screen name="Sell Post" component={SellPost} />
    </Tab.Navigator>
  );
}

function TabNavigator(props) {
  const {navigation} = props;
  const [currentRoute, setCurrentRoute] = useState('Dashboard');
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Dashboard':
        icon = 'home-outline';
        break;
      case 'Buy Post':
        icon = 'cart-arrow-down';
        break;
      case 'Sell Post':
        icon = 'cart-arrow-up';
        break;
    }

    return (
      <>
        <MCI
          name={icon}
          size={30}
          color={routeName === selectedTab ? color.primary : color.white}
        />
        <Text
          style={{
            color: routeName === selectedTab ? color.primary : color.white,
          }}>
          {routeName}
        </Text>
      </>
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setCurrentRoute(routeName);
          navigate(routeName);
        }}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type={'UP'}
      // style={styles.bottomBar}
      screenOptions={{headerShown: false, lazy: true}}
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor={color.primaryBlue}
      initialRouteName={currentRoute}
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => {
              setCurrentRoute('Dashboard');
              navigate('Dashboard');
            }}>
            <Ionicons
              name={'ios-home-outline'}
              color={currentRoute === 'Dashboard' ? color.primary : color.white}
              size={25}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="Dashboard"
        position="CIRCLE"
        component={() => <Dashboard navigation={navigation} />}
      />
      <CurvedBottomBar.Screen
        name="Buy Post"
        component={() => <BuyPost navigation={navigation} />}
        position="LEFT"
      />
      <CurvedBottomBar.Screen
        name="Sell Post"
        component={() => <SellPost navigation={navigation} />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
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
            navigation.navigate({ name: route.name, merge: true });
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
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }} tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Buy Post" component={BuyPost} />
      <Tab.Screen name="Sell Post" component={SellPost} />
    </Tab.Navigator>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: color.white,
    height: 50,
    borderTopWidth: 2,
    borderTopColor: color.defaultBackGrey,
  },
});
