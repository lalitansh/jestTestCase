import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import CommonHeader from '../../components/common/Header/commonHeader';
import {color} from '../../constants/theme/Color';
import {PropType} from '../Dashboard';

const BuyPost: React.FC<PropType> = props => {
  const {navigation = {}} = props || {};
  return (
    <ScrollView style={styles.headContainer}>
      <CommonHeader
        backIcon
        title="Buy Post"
        titleBottomBack
        navigation={navigation}
      />

      <View style={styles.screen1}>
        <Text>Hello </Text>
      </View>
    </ScrollView>
  );
};

export default BuyPost;

const styles = StyleSheet.create({
  headContainer: {
    flex: 1,
    backgroundColor: color.white,
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
