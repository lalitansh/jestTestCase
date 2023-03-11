import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from './posts/post';
import PostDetail from './posts/postDetail';
import Login from './auth/login';
import Signup from './auth/signup';
import auth from '@react-native-firebase/auth';
import Splash from './splash';
import onboarding from './onboarding';
import GetStarted from './auth/getStarted';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

const Container: React.FC<PropType> = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

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
        {/* {!user ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Chat" component={Posts} />
        )} */}

        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
