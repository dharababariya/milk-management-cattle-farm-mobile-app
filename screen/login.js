import React, {Component} from 'react';

import {
  Alert,
  Text,
  Button,
  TextInput,
  View,
  ImageBackground,
  StyleSheet,
  props,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import register from './register';
import home from './home';
// import screen from './screen'

const Stack = createStackNavigator();
export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin = async () => {
    const {username, password} = this.state;
    fetch('http://192.168.56.1:3000/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    })
      .then((req) => req.json())
      .then((data) => {
        userToken = data.token;

        if (!userToken) {
          Alert.alert('user not exist');
        } else {
          this.storeToken(userToken).then(
            this.props.navigation.navigate('home'),
          );
        }
      });
  };


  storeToken = async (userToken) => {
    try {
      await AsyncStorage.setItem('JWT_token', userToken);
    } catch (e) {
      console.log('Error :', e);
    }
  };

  render() {
    forRegister=()=>{
      this.props.navigation.navigate('register')
    }
    return (
      <View style={styles.container}>
        <Icon name="person-outline" size={100} color="#000000" />

        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
          placeholder={'Username'}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          placeholder={'Password'}
          autoCapitalize="none"
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          color="#005c8c"
          onPress={this.onLogin.bind(this)}
        />
        <Text style={{color:"blue" }} 
              onPress={()=>this.forRegister()}>
              New Here ? Register
            </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    textDecorationColor: 'pink',
    paddingTop: 100,
    paddingBottom: 10,
  },
  input: {
    color: '#000000',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fafafa',
    marginBottom: 10,
    textDecorationColor: 'pink',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
