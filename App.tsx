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
  LogBox,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Container from './src/screens/navigator';
import {color} from './src/constants/theme/Color';
import 'react-native-gesture-handler';
// import { SafeAreaView, SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      {Platform.OS === 'android' ? (
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          translucent={true}
          backgroundColor={color.headerColor}
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
