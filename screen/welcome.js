import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  props,
  Pressable,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import login from './login';
import register from './register';

import {ScrollView} from 'react-native-gesture-handler';
class home extends React.Component {
  // homepress = async () => {
  //   // async () => {
  //   const value = await AsyncStorage.getItem('JWT_token');
  //   console.log('In async Storage Value', value);
  //   // Alert.alert('refresh', value);
  //   // };
  // };
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image
            source={require('../images/pp.jpg')}
            style={{
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignContent: 'center',
              paddingBottom: 10,
            }}
          />
          <Text style={styles.sw}>Milk Management For Cattele Farm</Text>
        </View>

        <View style={styles.input}>
          <View style={{padding: 15}}>
            <Text style={styles.bt} onPress={() => this.props.navigation.navigate('Login')}>
              getStart
            </Text>
            {/* <Button title="check" onPress={()=>this.homepress()} /> */}
          </View>
        </View>
      </>
    );
  }
}
export default home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    color: 'pink',
  },
  input: {
    flex: 0.2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#fafafa',
  },
  bt: {
    display: 'flex',
    padding: 10,
    alignItems: 'center',
    color:'blue',
  },
  sw: {
    paddingTop: 20,
    fontSize: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
