import React, {Component} from 'react';
import {Alert} from 'react-native';
import {responseCode, activeBaseURL} from '../constants/apiConstant';
import Toast from 'react-native-simple-toast';
import {setJSExceptionHandler} from 'react-native-exception-handler';

const errorHandler = (e: any, isFatal: boolean) => {
  if (isFatal) {
    if (e.message.includes('setValue')) {
    } else {
      Alert.alert(
        'Unexpected error occurred',
        `
            Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}

            Refresh The View.
            `,
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    }
  } else {
    // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler, true);

export function callPostApi(
  urlStr: string,
  params: Object,
  accessToken: string,
) {
  const finalURL = activeBaseURL.base + urlStr;
  return fetch(finalURL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(params),
  })
    .then(response => response.json())
    .then(responseJson => {
      let isSucess = false;
      if (
        responseJson.status_code == responseCode.success ||
        responseJson.statusCode == responseCode.success ||
        responseJson.message === 'Success'
      ) {
        isSucess = true;
      } else if (
        responseJson.status_code == responseCode.sessionExpire ||
        responseJson.statusCode == responseCode.sessionExpire
      ) {
        Alert.alert('sessionExpire');
      } else {
        if (responseJson.message == null || responseJson.message == '') {
          setTimeout(() => {
            Alert.alert('', 'Server Error!!! Please Try After Some Time');
          }, 100);
        } else {
          setTimeout(() => {
            Alert.alert('', responseJson.message);
          }, 100);
        }
      }
      // return responseJson
      return {
        value: responseJson,
        valid: isSucess,
      };
    })
    .catch(error => {
      if (JSON.stringify(error).includes('line')) {
        setTimeout(() => {
          Alert.alert('Request Time Out!!!', 'Please try after some time.');
        }, 200);
      } else {
        setTimeout(() => {
          Alert.alert('', JSON.stringify(error));
        }, 200);
      }

      return {
        value: '',
        valid: false,
      };
    });
  // } else {
  //     setTimeout(() => { Alert.alert("", 'Sorry, No internet connectivity detected. Please check your internet settings and try again') }, 200);
  //     return {
  //         value: '',
  //         valid: false,
  //     };
  // }
  // }
  // );
}

export function callGetApi(urlStr: string, accessToken: string) {
  const finalURL = activeBaseURL.base + urlStr;
  return fetch(finalURL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log('result--',responseJson)
      let isSucess = false;
      if (
        responseJson.status_code == responseCode.success ||
        responseJson.statusCode == responseCode.success ||
        responseJson.message === 'Success'
      ) {
        isSucess = true;
      }else if (
        responseJson.status_code == responseCode.sessionExpire ||
        responseJson.statusCode == responseCode.sessionExpire
      ) {
        Alert.alert('Session expired');
      } else {
        if (responseJson !== null) {
          isSucess = true;
        }else if (responseJson.message == null || responseJson.message == '') {
          setTimeout(() => {
            Alert.alert('', 'Server Error!!! Please Try After Some Time');
          }, 200);
        } else {
          setTimeout(() => {
            Alert.alert('', responseJson.message);
          }, 200);
        }
      }
      // return responseJson
      return {
        value: responseJson,
        valid: isSucess,
      };
    })
    .catch(error => {
      console.error(error);
      if (JSON.stringify(error).includes('line')) {
        setTimeout(() => {
          Alert.alert('Request Time Out!!!', 'Please try after some time.');
        }, 200);
      } else {
        setTimeout(() => {
          Alert.alert('', JSON.stringify(error));
        }, 200);
      }

      return {
        value: '',
        valid: false,
      };
    });
}

export function callDeleteApi(urlStr: string, accessToken: string) {
  // return NetInfo.fetch().then(state => {
  //     console.log("Connection type", state.type);
  //     console.log("Is connected?", state.isConnected);

  //     if (state.isConnected) {

  const finalURL = activeBaseURL.base + urlStr;
  return fetch(finalURL, {
    method: 'DELETE',
    headers: {
      accessToken: accessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      let isSucess = false;
      if (
        responseJson.status_code == responseCode.success ||
        responseJson.statusCode == responseCode.success
      ) {
        isSucess = true;
        if (
          responseJson.message != '' &&
          responseJson.message != ' ' &&
          responseJson.message != null
        ) {
          setTimeout(() => {
            Toast.show(responseJson.message);
          }, 200);
        }
      } else if (
        responseJson.status_code == responseCode.sessionExpire ||
        responseJson.statusCode == responseCode.sessionExpire
      ) {
        Alert.alert('session expired');
      } else {
        if (responseJson.message == null || responseJson.message == '') {
          setTimeout(() => {
            Alert.alert('', 'Server Error!!! Please Try After Some Time');
          }, 200);
        } else {
          setTimeout(() => {
            Alert.alert('', responseJson.message);
          }, 200);
        }
      }
      // return responseJson
      return {
        value: responseJson,
        valid: isSucess,
      };
    })
    .catch(error => {
      console.error(error);
      if (JSON.stringify(error).includes('line')) {
        setTimeout(() => {
          Alert.alert('', 'Server Error!!!\nPlease try after some time.');
        }, 200);
      } else {
        setTimeout(() => {
          Alert.alert('', JSON.stringify(error));
        }, 200);
      }

      return {
        value: '',
        valid: false,
      };
    });
  //     } else {
  //         setTimeout(() => { Alert.alert("", 'Sorry, No internet connectivity detected. Please check your internet settings and try again') }, 200);
  //         return {
  //             value: '',
  //             valid: false,
  //         };
  //     }
  // }
  // );
}
