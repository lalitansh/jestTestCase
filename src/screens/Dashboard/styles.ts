import {StyleSheet} from 'react-native';
import {CommonFontFamily} from '../../components/common/styles/commonStyles';
import {screenWidth} from '../../constants/appConstant';
import {color} from '../../constants/theme/Color';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 100,
    backgroundColor: color.white,
  },
  mainCard: {
    flexDirection: 'row',
    height: 80,
    width: '45%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: color.primaryMiddle,
    alignSelf: 'center',
  },
  mainCard2: {
    // flexDirection: 'row'
    elevation: 2,
    marginLeft: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: 'center',
    // padding: 25
    backgroundColor: color.primaryMiddle,
    margin: 0.7,
    alignSelf: 'center',
  },
  customRightText: {
    ...CommonFontFamily.semibold,
    fontSize: 14,
    color: color.white,
  },
  rowStyle: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  marginTop12: {
    marginTop: 12,
  },
  mainCard1: {
    justifyContent: 'center',
    marginRight: 20,
    alignItems: 'center',
  },
  subView: {
    flex: 0.2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 8,
    backgroundColor: color.primaryMiddle,
  },
  imgStyles: {
    height: '100%',
    width: '100%',
  },
  textView: {
    flex: 0.7,
    // width: '50%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: color.primaryMiddle,
    justifyContent: 'space-around',
    paddingVertical: 5,
    paddingRight: 20,
    paddingLeft: 10,
  },
  textView1: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: color.primaryMiddle,
    justifyContent: 'center',
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textStyle: {
    color: color.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
  textStyle1: {
    ...CommonFontFamily.medium,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'center',
  },
  textStyle2: {
    ...CommonFontFamily.medium,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
  },
  buttonStyle: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    right: 30,
    backgroundColor: 'white',
    elevation: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  subView1: {
    height: 66,
    width: 66,
    borderRadius: 33,
    backgroundColor: color.primaryOff,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  thirdView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  stoneView: {
    width: screenWidth / 2.5,
    aspectRatio: 1,
    justifyContent: 'flex-end',
  },
  stoneView1: {
    width: screenWidth / 2.2,
    aspectRatio: 1,
    justifyContent: 'flex-start',
  },
  stoneSubView: {
    height: screenWidth / 5.5,
    width: '100%',
    backgroundColor: color.primaryBlue,
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  stoneSubView1: {
    height: screenWidth / 6,
    width: '100%',
    backgroundColor: color.black,
    opacity: 0.9,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 4,
  },
});

export default styles;
