import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {screenHeight, screenWidth} from '../../../constants/appConstant';
import {color} from '../../../constants/theme/Color';

const SkeletonEffect = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
        {/* <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="center"
            marginHorizontal={20}>
            <SkeletonPlaceholder.Item
              width={screenWidth / 4}
              height={100}
              borderRadius={50}
            />
            <SkeletonPlaceholder.Item marginLeft={20}>
              <SkeletonPlaceholder.Item width={'80%'} height={20} />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={'80%'}
                height={20}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder> */}
        <SkeletonPlaceholder borderRadius={4}>
          <SkeletonPlaceholder.Item alignItems="center">
            <SkeletonPlaceholder.Item marginHorizontal={20}>
              <SkeletonPlaceholder.Item
                width={screenWidth - 20}
                height={screenHeight / 4.5}
              />
              <SkeletonPlaceholder.Item
                marginTop={10}
                width={screenWidth - 20}
                height={screenHeight / 4.5}
              />
              <SkeletonPlaceholder.Item
                marginTop={10}
                width={screenWidth - 20}
                height={screenHeight / 4.5}
              />
              <SkeletonPlaceholder.Item
                marginTop={10}
                width={screenWidth - 20}
                height={screenHeight / 4.5}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </View>
    </>
  );
};

export default SkeletonEffect;
