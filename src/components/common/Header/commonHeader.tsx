import React from 'react';
import {View, Image, StatusBar, StyleSheet} from 'react-native';
import {color} from '../../../constants/theme/Color';
import {image} from '../../../constants/theme/Image';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type PropsType = {
  logo?: boolean;
  search?: boolean;
};

const CommonHeader: React.FC<PropsType> = (props: any) => {
  const {logo, search} = props;

  return (
    <>
      <StatusBar translucent={true} backgroundColor={color.white} />
      <View style={styles.mainView}>
        {logo && <Image source={image.iconUpayment} style={styles.img1Style} />}
        {search && (
          <Image
            resizeMode="contain"
            source={image.iconSearch}
            style={styles.img2Style}
          />
        )}
      </View>
    </>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: color.defaultBackGrey,
    marginTop: getStatusBarHeight(),
    justifyContent: 'space-between',
  },
  img1Style: {
    width: '60%',
    height: 40,
    marginLeft: -10,
  },
  img2Style: {
    width: 50,
    height: 50,
  },
});
