import React from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {color} from '../../../constants/theme/Color';
import {image} from '../../../constants/theme/Image';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CommonFontFamily} from '../styles/commonStyles';
import {DrawerActions} from '@react-navigation/native';
import styles from './styles';

const {height, width} = Dimensions.get('window');
type PropsType = {
  title?: string;
  back?: boolean;
  navigation?: {};
  backgroundClean?: boolean;
  backIcon?: boolean;
  logOutIcon?: boolean;
  titleBottomBack?: boolean;
  onPressLogout?: () => void;
  titleAlign?: string;
  drawerIcon?: boolean;
  customRightComponent?: JSX.Element;
  noBorder?: boolean;
  customStyle?: {};
  appLogo?: any;
};

const CommonHeader: React.FC<PropsType> = (props: any) => {
  const {
    title = '',
    back = false,
    navigation = {},
    onPressLogout,
    logOutIcon = false,
    backIcon = false,
    titleBottomBack = false,
    backgroundClean = false,
    titleAlign = 'center',
    drawerIcon = false,
    noBorder = false,
    customStyle = {},
    appLogo,
    customRightComponent,
  } = props;

  const backOperation = () => {
    if (backIcon) {
      return (
        <AntDesign
          name="arrowleft"
          onPress={() => navigation.goBack()}
          color={backgroundClean ? color.black : color.white}
          size={22}
        />
      );
    } else if (drawerIcon) {
      return (
        <Ionicons
          name="ios-menu-sharp"
          onPress={
            () => {} // navigation.toggleDrawer()
          }
          color={color.white}
          size={35}
        />
      );
    } else if (back) {
      return (
        <Text onPress={() => navigation.goBack()} style={styles.commonFont}>
          Back
        </Text>
      );
    }
  };

  const rightComponent = () => {
    if (customRightComponent) {
      return customRightComponent;
    } else if (logOutIcon) {
      return (
        <AntDesign
          name="logout"
          onPress={onPressLogout}
          color={color.white}
          size={22}
        />
      );
    }
  };

  const titleComponent = () => {
    if (appLogo) {
      return (
        <Image
          resizeMode="cover"
          source={appLogo}
          style={{height: 30, width: 100}}
        />
      );
    } else if (title) {
      return (
        <Text
          style={[
            styles.commonFont,
            backgroundClean ? styles.blackColor : null,
            {textAlign: titleAlign ? titleAlign : 'center'},
          ]}>
          {title}
        </Text>
      );
    }
  };

  let backStyle = {};

  if (!backIcon && !drawerIcon) {
    backStyle = styles.view0;
  } else {
    backStyle = styles.view1;
  }

  return (
    <>
      {!titleBottomBack ? (
        <View
          style={[
            styles.mainView,
            backgroundClean ? styles.backClean : null,
            noBorder ? styles.noBorder : null,
            customStyle,
          ]}>
          <View style={backStyle}>{backOperation()}</View>
          <View style={styles.view2}>{titleComponent()}</View>
          <View style={[styles.flex4, {alignItems: 'flex-end'}]}>
            {rightComponent()}
          </View>
        </View>
      ) : (
        <View
          style={[
            styles.mainView1,
            backgroundClean ? styles.backClean : null,
            noBorder ? styles.noBorder : null,
          ]}>
          <View style={{}}>{backOperation()}</View>
          <View style={[styles.marginTop8]}>
            <Text
              style={[
                styles.textStyle1,
                backgroundClean ? styles.blackColor : null,
                {textAlign: titleAlign ? titleAlign : 'center'},
              ]}>
              {title}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default CommonHeader;
