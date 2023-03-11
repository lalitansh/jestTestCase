/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StatusBar,
  useColorScheme,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Container from './src/screens/navigator';
import {color} from './src/constants/theme/Color';
// import { SafeAreaView, SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      {Platform.OS === 'android' ? (
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent={true}
          backgroundColor={color.themeGrey}
        />
      ) : (
        <SafeAreaView
          edges={['top']}
          style={{backgroundColor: color.primary}}
        />
      )}
      <View style={{flex: 1, backgroundColor: color.primary}}>
        <Container />
      </View>
      <SafeAreaView
        edges={['bottom']}
        style={{backgroundColor: color.defaultBackGrey}}
      />
    </>
  );
};

export default App;
