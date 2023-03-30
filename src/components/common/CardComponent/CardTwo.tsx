import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  SafeAreaView,
  Dimensions,
  NativeScrollEvent,
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import {images} from '../assets/image';
import {restData} from '../helper/sampleData';

const CardTwo: React.FC = () => {
  const arr = new Array(30).fill({
    name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        // hitSlop={{top: 30,
        // bottom: 30,
        // left: 30,
        // right: 30}
        // }
        onPress={() => navigation.goBack()}
        style={styles.touchableBack}
        activeOpacity={0.8}>
        <Image
          resizeMode={'contain'}
          source={images.backIcon}
          style={[styles.imgSize]}
        />
      </TouchableOpacity>

      <FlatList
        data={restData}
        scrollEventThrottle={16}
        contentContainerStyle={{backgroundColor: 'white'}}
        renderItem={({item, index}: any) => {
          return (
            <View key={index} style={styles.scrollContent}>
              <View style={styles.rowStyle}>
                
                <View style={styles.flex6}>
                  <Text style={styles.textStyles}>{item.title}</Text>
                  <View style={[styles.rowStyle1, styles.marginTop5]}>
                    <Image source={item.image} style={styles.imgStyles1} />
                    <Text style={styles.textStyles1}>1000-5000</Text>
                  </View>
                  <View style={styles.rowStyle1}>
                    <Image source={item.image} style={styles.imgStyles1} />
                    <Text style={styles.textStyles1}>Mumbai</Text>
                  </View>
                  <View style={styles.rowStyle1}>
                    <Image source={item.image} style={styles.imgStyles1} />
                    <Text style={styles.textStyles1}>Grilled</Text>
                  </View>
                  <View style={styles.rowStyle1}>
                    <Image source={item.image} style={styles.imgStyles1} />
                    <Text style={styles.textStyles1}>Black</Text>
                  </View>
                </View>

                <View style={styles.flex3}>
                  <Image source={item.image} style={styles.imgStyles} />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CardTwo;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  marginTop5: {
    marginTop: 5,
  },
  textStyles: {
    fontSize: 18,
    color: 'black',
  },
  textStyles1: {
    fontSize: 12,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  rowStyle1: {
    flexDirection: 'row',
    paddingTop: 2,
  },
  imgStyles: {
    height: 100,
    width: '100%',
    margin: 5,
    borderRadius: 16,
  },
  imgStyles1: {
    height: 10,
    width: 10,
    margin: 5,
    borderRadius: 1,
  },
  flex3: {
    flex: 0.3,
  },
  flex6: {
    flex: 0.6,
    paddingLeft: 16,
    paddingTop: 8,
  },
 
  imgSize: {
    height: 20,
    width: 20,
  },
  touchableBack: {
    left: 25,
    height: 50,
    width: 100,
    top: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scrollContent: {
    marginTop: 16,
    backgroundColor: 'white', //"#F2F1EC",
    paddingHorizontal: 16,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  whiteColorText: {
    color: 'white',
  },
});
