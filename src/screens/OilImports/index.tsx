import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import CommonHeader from '../../components/common/Header/commonHeader';
import {CommonFontFamily} from '../../components/common/styles/commonStyles';
import {color} from '../../constants/theme/Color';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Offers- India'],
      tableData: [
        ['LLDPE', '$1120-1130'],
        ['PVC', '$120-1130'],
        ['EVA', '$920-1130'],
        ['LDEP', '$320-1130'],
      ],
      tableHead1: ['Chinease-Futers'],
    };
  }

  render() {
    const state = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.headContainer}>
        <CommonHeader
          backIcon
          title="Oil imports"
          titleBottomBack
          navigation={navigation}
        />
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={state.tableHead}
              style={styles.head1}
              textStyle={styles.headingText}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>

          <View style={{marginTop: 8}}>
            <Table
              borderStyle={{
                borderWidth: 2,
                borderColor: '#c8e1ff',
              }}>
              <Row
                data={state.tableHead1}
                style={styles.head1}
                textStyle={styles.headingText}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headContainer: {
    flexGrow: 1,
    backgroundColor: color.white,
  },
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6, ...CommonFontFamily.medium, fontSize: 16},
  headingText: {
    margin: 6,
    ...CommonFontFamily.medium,
    fontSize: 18,
    color: color.white,
  },
  head1: {
    height: 40,
    backgroundColor: color.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
