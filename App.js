import * as React from 'react';
import { Button, View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orderslist from './components/Orderslist';
import Productslist from './components/Productslist';
import Employeeslist from './components/employeeslist';

function HomeScreen({ navigation }) {
  const products=[{id:'100$',name:'shirt',price:'50$',picture:'https://www.affordable.pk/uploads/products/thumbs/large_15556869010_braun_f.jpg',quantity:5,description:'This is Shirt'},
  {id:2,name:'shoes',price:'100$',picture:'https://5.imimg.com/data5/UW/VK/SQ/ANDROID-64440449/product-jpeg-500x500.jpg',quantity:10,description:'This is shoes'},
  {id:3,name:'jacket',price:'150$',picture:'https://www.raramart.co.jp/assets/uploads/products/2019-06-05-11-46-25-7.JPG',quantity:15,description:'This is jacket'}];
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start',marginTop:100 }}>
  
      <TouchableOpacity
          style={{backgroundColor: '#808080',padding:20,margin:20}}
          onPress={() => navigation.navigate('Productslist',products)}
        >
          <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Products List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: '#87ceeb',padding:20,margin:20}}
          onPress={() => navigation.navigate('Orderslist')}
        >
          <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Orders List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: '#654321',padding:20,margin:20}}
          onPress={() => navigation.navigate('Employeeslist')}
        >
          <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Employees List</Text>
        </TouchableOpacity>
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Productslist" component={Productslist} />
        <Stack.Screen name="Orderslist" component={Orderslist} />
        <Stack.Screen name="Employeeslist" component={Employeeslist} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
 
 
});
export default App;