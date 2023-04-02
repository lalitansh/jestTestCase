import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from './posts/post';
import PostDetail from './posts/postDetail';
import Login from './auth/login';
import Signup from './auth/signup';
import auth from '@react-native-firebase/auth';
import Splash from './splash';
import onboarding from './onboarding';
import GetStarted from './auth/getStarted';
import OtpMpin from './auth/otpMpin';
import TabNavigator from './navigation/tabNavigation';
import DrawerDemo from './navigation/drawerNavigation';
import OilImports from './OilImports';
import Buyers from './Buyers';
import UserProfile from './Form/Profile';
import BuyPost from './BuyPost';
import JobPost from './Form/FormThree';
import MyTabs from './navigation/tabNavigation';
import SellPost from './SellPost';
import FormTwo from './Form/FormTwo';
import Sellers from './Sellers';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

const Container: React.FC<PropType> = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const {navigation, route} = props || {};

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle user state changes
  function onAuthStateChanged(user) {
    console.log('user======>', user);
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="onboarding" component={onboarding} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OtpMpin" component={OtpMpin} />
        <Stack.Screen name="OilImports" component={OilImports} />
        <Stack.Screen name="Sellers" component={Sellers} />
        <Stack.Screen name="Buyers" component={Buyers} />
        <Stack.Screen name="Profile" component={UserProfile} />
        <Stack.Screen name="Buy Post" component={BuyPost} />
        <Stack.Screen name="Sell Post" component={SellPost} />
        <Stack.Screen name="Job Post" component={JobPost} />
        {/* {!user ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Chat" component={Posts} />
        )} */}

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="Dashboard" component={DrawerDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
