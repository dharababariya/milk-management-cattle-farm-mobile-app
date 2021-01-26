import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
  Alert,
  openDrawer,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import login from './login';
import Login from './login';

const Drawer = createDrawerNavigator();

const CardList = (props) => (
  <View>
    {props.product.map((product) => (
      <Card key={product.id} {...product} />
    ))}
  </View>
);

class Card extends React.Component {
  render() {
    const product = this.props;
    return (
      <View style={styles.item}>
        <View style={styles.border}>
          <Image
            source={require('../images/milk.jpeg')}
            style={{
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignContent: 'center',
              marginBottom: 10,
              marginTop: 5,
              marginLeft: 5,
              marginRight: 5,
            }}
          />
          <Text style={{fontSize: 20}}> {product.porduct_name}</Text>
          <Text style={{fontSize: 20}}>{product.price}</Text>
          <Button title="add to cart" />
        </View>
      </View>
    );
  }
}
class home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [
        {
          porduct_name: 'milk',
          price: 20,
          id: 1,
        },
        {
          porduct_name: 'dahi',
          price: 10,
          id: 2,
        },
      ],
    };
  }

  static navigationOptions = {
    title: 'order',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    //headerTintColor: '#0ff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  homepress = async () => {
    // async () => {
    const value = await AsyncStorage.getItem('JWT_token');
    console.log('In async Storage Value', value);
    // Alert.alert('refresh', value);
    // };
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <StatusBar />
          <ScrollView>
            {/* <Icon  
                    style={{ paddingLeft: 10 }}  
                    onPress={() => navigation.openDrawer()}  
                    name="md-menu"  
                    size={30}  
                    style={styles.seen}
                />   */}
            {/* <Button title="=" onPress="jh" style={styles.seen}/> */}
            <View style={styles.item}>
              <CardList product={this.state.product} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.input}>
          {/* <Icon name="md-search-outline" size={20} color="#fff" /> */}

          <Icon.Button
            name="home-outline"
            size={30}
            color="#000"
            onPress={this.homepress}
          />
          <Icon name="cart-outline" size={30} color="#000000" />

          <Icon name="person-outline" size={30} color="#000000" />
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
    // flexDirection:"row",
    // paddingBottom:20,
    // backgroundColor: '#fff',
  },
  input: {
    flex: 0.07,
    justifyContent: 'space-between',
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  seen: {
    justifyContent: 'flex-start',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  item: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    borderColor: 'pink',
    paddingTop: 50,
    paddingBottom: 10,
  },
  border: {
    borderColor: '#000',
    backgroundColor: '#fff',
    // borderWidth:1,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  greate: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
});
