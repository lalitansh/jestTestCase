import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from './products/products';
import ProductDetails from './products/productDetails';
import AddProduct from './products/addProduct';

const Stack = createStackNavigator();
export const navigationRef = React.createRef();

function Container() {
  const [initialRoute, setInitialRoute] = useState('Products');

  return (
    <NavigationContainer ref={navigationRef} initialRouteName={initialRoute}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
