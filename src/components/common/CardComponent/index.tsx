import React, { useRef } from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import { cardListScreen, listScreen } from "../helper/sampleData"

const CardHome: React.FC = props => {
  const offset = useRef(new Animated.Value(0)).current;
  const rotation = useSharedValue(0);
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  const navigation = useNavigation();
  // // Set the opacity value to animate between 0 and 1
  // opacity.value = withRepeat(
  //   withTiming(1, { duration: 1000, easing: Easing.ease }),
  //   -1,
  //   true
  // );

  const styleTemp = useAnimatedStyle(() => ({opacity: opacity.value}), []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 0.3, justifyContent:'center'}}>
        {cardListScreen.map(item=> {
          return(
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate(item.screen)}
        style={[
          styles.touchableStyle,
          styles.alignCenter,
          styles.justifyCenter,
        ]}>
        <Text style={[styles.textStyle, styles.whiteColorText]}>{item.text}</Text>
      </TouchableOpacity>
          )
        })}
      </ScrollView>
      
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  touchableStyle: {
    borderWidth: 2,
    borderRadius: 5,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    width: '100%',
    height: 50,
    backgroundColor: '#00003d',
  },
  whiteColorText: {
    color: 'white',
  },
  round: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  alignItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
});
