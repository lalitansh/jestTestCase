import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {
  TouchableOpacity,
  Text,
  Alert,
  View,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {database} from '../../../config/firebase';
import CommonHeader from '../../components/common/Header/commonHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import {color} from '../../constants/theme/Color';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import ProgressBarView from '../../components/ProgressBarView';
import { CommonStyles } from '../../components/common/styles/commonStyles';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from 'firebase/firestore';

export type PropType = {
  navigation?: any;
};

const Chat: React.FC<PropType> = props => {
  const {navigation} = props || {};
  const [isProgress, setIsProgress] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      );
    });

    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return () => {
    unsubscribe()
    // subscriber
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const {_id, createdAt, text, user} = messages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  const logOutConfirmation = () => {
    Alert.alert(
      'Confirm!',
      'Are you sure you want to Logout from app.',
      [
        {text: 'Yes', onPress: onLogout},
        {text: 'No', onPress: () => {}, style: 'cancel'},
      ],
      {
        cancelable: true,
      },
    );
  };

  const onLogout = () => {
    setIsProgress(true);
    auth()
      .signOut()
      .then(() => {
        setIsProgress(false);
        console.log('logout success!');
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          }),
        );
      })
      .catch(() => {
        setIsProgress(false);
      });
  };

  return (
    <View style={[CommonStyles.mainContainer, CommonStyles.backWhite]}>
      <CommonHeader
        title={'Chat'}
        logOutIcon
        onPressLogout={logOutConfirmation}
      />
        
        <GiftedChat
          messages={messages}
          showAvatarForEveryMessage={true}
          onSend={messages => onSend(messages)}
          user={{
            _id: auth()?.currentUser?.email,
            avatar: 'https://i.pravatar.cc/300',
          }}
        />
        

      <ProgressBarView visible={isProgress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: color.white,
  },
  mainCard: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    elevation: 2,
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
    // borderRadius: 5,
    // justifyContent: 'space-between',
    alignSelf: 'center',
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
    height: '70%',
    width: '80%',
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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
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
  },
  thirdView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Chat;
