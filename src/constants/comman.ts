import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setData(key, value) {
    try {
      await AsyncStorage.setItem(key, value.toString())
    } catch (e) {
      // saving error
    }
  }
  
export async function getData(key) {
    try {
      return await AsyncStorage.getItem(key)
    } catch (e) {
      // error reading value
    }
}
  
export async function removeData(key) {
    try {
      return await AsyncStorage.removeItem(key)
    } catch (e) {
      // error reading value
    }
}

const KeyboardType = {
    email: "email-address",
    numeric: 'numeric',
    numberPad: 'number-pad',
    phonePad: 'phone-pad',
    decimalPad: 'decimal-pad',
    default: 'default'
  }

const ReturnType = {
    next: "next",
    done: "done"
}  

  export {
    KeyboardType,
    ReturnType
  }