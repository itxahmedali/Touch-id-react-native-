import React from 'react';
import {View,Text,TouchableHighlight, StyleSheet} from 'react-native';
import TouchID from 'react-native-touch-id';
const optionalConfigObject = {
  title: 'Authentication Required', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Touch sensor', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Cancel', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};
function _pressHandler() {
  TouchID.authenticate('to demo this react-native component', optionalConfigObject)
    .then(success => {
      AlertIOS.alert('Authenticated Successfully');
    })
    .catch(error => {
      AlertIOS.alert('Authentication Failed');
    });
}
const App = () => {
  return (
    <View>
        <TouchableHighlight style={styles.button} onPress={_pressHandler}>
          <Text>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
  );
}

const styles = StyleSheet.create({
  button:{
    width:"100%",
    padding:20,
    borderRadius:20
  }
})

export default App;
