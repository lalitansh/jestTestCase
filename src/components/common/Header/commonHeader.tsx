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

const {height, width} = Dimensions.get('window');
type PropsType = {
  title?: string;
  back?: boolean;
  navigation?: {};
  backgroundClean?: boolean;
  backIcon?: boolean;
  logOutIcon?: boolean;
  onPressLogout?: () => void;
};

const CommonHeader: React.FC<PropsType> = (props: any) => {
  const {
    title = '',
    back = false,
    navigation = {},
    onPressLogout,
    logOutIcon = false,
    backIcon = false,
    backgroundClean = false,
  } = props;

  const backOperation = () => {
    if (backIcon) {
      return (
        <AntDesign
          name="arrowleft"
          onPress={() => navigation.goBack()}
          color={color.black}
          size={22}
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

  return (
    <>
      <View
        style={[styles.mainView, backgroundClean ? styles.backClean : null]}>
        <View style={styles.view1}>{backOperation()}</View>
        <View style={styles.view2}>
          <Text style={[styles.commonFont, {textAlign: 'center'}]}>
            {title}
          </Text>
        </View>
        <View style={[styles.view1, {alignItems: 'flex-end'}]}>
          {logOutIcon ? (
            <AntDesign
              name="logout"
              onPress={onPressLogout}
              color={color.white}
              size={22}
            />
          ) : null}
        </View>
      </View>
    </>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  commonFont: {
    color: color.white,
    fontSize: 16,
  },
  mainView: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: color.primary,
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : undefined,
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 65,
  },
  view1: {
    flex: 0.2,
  },
  view2: {
    flex: 0.8,
  },
  backClean: {
    backgroundColor: color.transparent,
  },
});
