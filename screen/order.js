import React from 'react';
// import { View, Text, StyleSheet, Button, ImageBackground ,Image ,props, Pressable} from 'react-native';
import{StyleSheet,Platform}from 'react-native';
import 'react-native-gesture-handler';

import { DataTable ,Provider as PaperProvider , View, Text} from 'react-native-paper';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class order extends React.Component{
    render(){
        return (
          <PaperProvider>
            <DataTable.Row style={styles.table}>
              <DataTable.Cell >Product</DataTable.Cell>
              <DataTable.Cell >Quntity</DataTable.Cell>
              <DataTable.Cell >price</DataTable.Cell>
              <DataTable.Cell >date</DataTable.Cell>
              <DataTable.Cell >total</DataTable.Cell>
            </DataTable.Row>
          </PaperProvider>
        );
    }
}
export default order;
const styles = StyleSheet.create({
    container: {
      flex:.5,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#fafafa',
    },
    status:{
        flex:.5,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#fff'
    },
    table:{
        justifyContent:'space-between',
        alignItems:'center',
        color:'blue',
        borderBottomColor:'#000',
        backgroundColor:'blue',
        fontSize:30,
    },
    

})

