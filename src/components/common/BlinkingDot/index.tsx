import Svg, {Circle} from 'react-native-svg';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {color} from '../../../constants/theme/Color';

const BlinkingDot = props => {
  const opacity = useSharedValue(0);

  // Set the opacity value to animate between 0 and 1
  opacity.value = withRepeat(
    withTiming(1, {duration: 1000, easing: Easing.ease}),
    -1,
    true,
  );

  const style = useAnimatedStyle(() => ({opacity: opacity.value}), []);

  return (
    <Animated.View style={style}>
      <Svg style={styles.circle} viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="50" fill={color.red} fillOpacity="1" />
      </Svg>
    </Animated.View>
  );
};

export default BlinkingDot;

const styles = StyleSheet.create({
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
