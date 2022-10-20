import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './products/products';
import ProductDetails from './products/productDetails';
import Login from './auth/login';
import Signup from './auth/signup';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

function Container() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [user]);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  if (initializing) return null;

  return (
    <NavigationContainer ref={navigationRef} initialRouteName={user ? 'Products': 'Login'}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
