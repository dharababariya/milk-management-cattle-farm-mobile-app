import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import Login from './screen/login';
import register from './screen/register';
import home from './screen/home';
import welcome from './screen/welcome';
import bill from './screen/bill';
import order from './screen/order';
import login from './screen/login';
// import DrawerContent from './screen/DrawerContent'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  logOut = () => {
    AsyncStorage.getAllKeys()
      .then(AsyncStorage.removeItem('JWT_token'))
      // console.log(">>>>>>",)
      .then(() => props.navigation.navigate('Login'));
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="my order"
        onPress={() => props.navigation.navigate('order')}
      />
      <Icon
        name="exit-outline"
        style={{paddingLeft: 12, paddingTop: 15}}
        onPress={() => this.logOut()}
        size={13}
        color="red">
        Log-out
      </Icon>
    </DrawerContentScrollView>
  );
}

// function MyStack() {

//   ( async(...props) => {

//     try {
//       const value = await AsyncStorage.getItem('JWT_token');
//       // return value;
//       console.log(">>>>>",value)
//       return value;

//     } catch (error) {
//       console.log('ERROR', error);
//       // Error retrieving data
//     }
//   })()
//   .then((value)=>{
//     if(value){
//       console.log("?????",value)
//       a=this.state.sname

//       console.log(">>>>>>",a)

//       this.SetStorege();

//     }

//   }

//   )

// }
function root() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="profile" component={home} />
      <Drawer.Screen name="home" component={home} />
      <Drawer.Screen name="bill" component={bill} />
      {/* <Drawer.Screen name="order" component={order} /> */}
    </Drawer.Navigator>
  );
}

export default class App extends React.Component {
  // constructor(props){
  // super(props);
  state = {
    isLogin: false,
  };
  async componentDidMount() {
    console.log('componentDidMount');
    try {
      const value = await AsyncStorage.getItem('JWT_token');
      console.log('local token ', value);
      if (value) {
        console.log('if local token ', value);
        this.setState({isLogin: true});
        console.log(this.state);
      }
    } catch (error) {
      console.log('ERROR', error);
      // Error retrieving data
    }
  }
  render() {
    const {isLogin} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName={}

          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#1a261a',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              // fontWeight: 'bold',
            },
          }}
          >
          {! isLogin ? (
            <Stack.Screen
            name="welcome"
            component={welcome}
            options={({title: 'welcome'}, {headerLeft: null})}
          />
          ):(
            <>
            </>
          )
          }
          <Stack.Screen
            name="home"
            component={root}
            options={({title: 'home'}, {headerLeft: null})}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={
              {title: 'login'}
              // {headerLeft: null}
            }
          />
          <Stack.Screen
            name="register"
            component={register}
            options={{title: 'register'}}
          />

          {/* <Stack.Screen
            name="welcome"
            component={welcome}
            options={({title: 'welcome'}, {headerLeft: null})}
          /> */}
          <Stack.Screen
            name="bill"
            component={bill}
            options={
              {title: 'bill'}
              // {headerLeft: null}
            }
          />
          <Stack.Screen
            name="order"
            component={order}
            options={{title: 'my orders'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
