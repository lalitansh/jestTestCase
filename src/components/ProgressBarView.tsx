import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';
import style from '../constants/theme/Style';
import {color} from '../constants/theme/Color';
import {MaterialIndicator} from 'react-native-indicators';

type Props = {
  visible: boolean;
  loadingText?: string;
};

type State = {};

export default class ProgressBarView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {loadingText, visible} = this.props || {};
    if (visible) {
      return (
        <Dialog dialogStyle={style.progressDialogBox} visible={true}>
          <View style={styles.viewStyle}>
            <MaterialIndicator
              color={color.primary}
              size={40}
              animationDuration={5200}
              trackWidth={3}
            />

            {loadingText && (
              <Text style={{marginTop: 5, textAlign: 'center'}}>
                {loadingText}
              </Text>
            )}
          </View>
        </Dialog>
      );
    } else {
      return <View />;
    }
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 40,
    alignItem: 'center',
  },
});
