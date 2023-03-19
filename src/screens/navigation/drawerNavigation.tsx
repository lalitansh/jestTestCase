import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SideDrawer from './SideDrawer';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import TabNavigator from './tabNavigation';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function DrawerDemo() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
      }}
      drawerContent={props => <SideDrawer {...props} />}>
      <Drawer.Screen name="DrawerRoot" component={drawerStack} />
    </Drawer.Navigator>
  );
}

const drawerStack = () => {
  const [loading, setLoading] = useState(false);
  const [initialRoute, setInitialRoute] = useState('');

  return (
    <Stack.Navigator
      initialRouteName={'Home'} //{currentUser == "vendor" ? "Vender" : "Customer"}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Screen2}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
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
  bottomBar: {},
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
});
