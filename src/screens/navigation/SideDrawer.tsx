import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  Linking,
  Share,
} from 'react-native';
import {
  CommonActions,
  StackActions,
  DrawerActions,
} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Drawer, Text} from 'react-native-paper';
import {color} from '../../constants/theme/Color';
import {image} from '../../constants/theme/Image';
import {CommonFontFamily} from '../../components/common/styles/commonStyles';

const DrawerContent = props => {
  return (
    <ImageBackground style={styles.container}>
      <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props}>
        <View style={styles.flex1}>
          <View style={styles.userInfo}>
            <View style={styles.rowDirection}>
              <TouchableNativeFeedback
                onPress={() => props.navigation.navigate('Profile')}>
                <Image style={styles.normalImage} source={image.demoImage} />
              </TouchableNativeFeedback>

              <View style={styles.marginLeft20}>
                <View>
                  <Text style={[styles.userName, styles.user2]}>Polytrend</Text>
                </View>
                {/* <View style = {{width:'90%',marginTop:3}}>
              <Text style={{fontSize:12,color: secondryColor ,flex:1, flexWrap:'wrap', width:'80%'}}>Email: {user.email}</Text>
              </View>
              <View style = {{marginTop:3}}>
              <Text style={{fontSize:12,color: secondryColor , flexWrap:'wrap', width:'100%'}}>phone : {user.dialing_code}-{user.phone}</Text>
              </View> */}
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              )}
              labelStyle={styles.labelStyle}
              inactiveTintColor="white"
              label="Home"
              onPress={() => {
                //  props.navigation.navigate('DrawerIndex');
              }}
            />

            <DrawerItem
              style={styles.drawerItem}
              labelStyle={[styles.labelStyle, {right: 16}]}
              icon={({color, size}) => (
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              )}
              inactiveTintColor="white"
              label={'Language'}
              onPress={() => {
                //openLanguageModal(true);
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              )}
              labelStyle={styles.labelStyle}
              inactiveTintColor="white"
              label="Home"
              onPress={() => {
                //  props.navigation.navigate('DrawerIndex');
              }}
            />

            <DrawerItem
              style={styles.drawerItem}
              labelStyle={[styles.labelStyle, {right: 16}]}
              icon={({color, size}) => (
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              )}
              inactiveTintColor="white"
              label={'Language'}
              onPress={() => {
                //openLanguageModal(true);
              }}
            />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.drawerItem}
              icon={({color, size}) => (
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              )}
              labelStyle={styles.labelStyle}
              inactiveTintColor="white"
              label="Home"
              onPress={() => {
                //  props.navigation.navigate('DrawerIndex');
              }}
            />

            <DrawerItem
              style={styles.drawerItem}
              labelStyle={[styles.labelStyle, {right: 16}]}
              icon={({color, size}) => (
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              )}
              inactiveTintColor="white"
              label={'Language'}
              onPress={() => {
                //openLanguageModal(true);
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: color.black,
  },
  flex1: {
    flex: 1,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft20: {
    marginLeft: 20,
    flexDirection: 'column',
  },
  user2: {
    ...CommonFontFamily.medium,
    color: color.primary,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  normalImage: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    resizeMode: 'stretch',
    //marginRight:50
  },
  userInfo: {
    paddingLeft: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  userName: {
    fontSize: 30,
    fontWeight: '500',
    color: 'white',
  },
  drawerSection: {
    marginTop: 20,
    // backgroundColor: primaryLightBlue,
    //left : 8
  },
  drawerItem: {
    //left : 15
    marginTop: -12,
  },
  iconStyle: {
    left: 2,
    fontSize: 20,
    color: color.primary,
  },
  labelStyle: {
    ...CommonFontFamily.medium,
    right: 15,
    //left: 10,
    color: color.primary,
  },
});
export default DrawerContent;
