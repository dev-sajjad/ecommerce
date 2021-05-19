import * as React from 'react';
import { Button, View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Orderslist from './components/Orderslist';
import Productslist from './components/Productslist';
import Employeeslist from './components/employeeslist';
import Productdetail from './components/product-details';
import Orderdetail from './components/order-details';
import Employeedetail from './components/employee-details';
import { useState } from 'react';

function HomeScreen({ navigation }) {
  const orders=[{id:1,products:[{name:'shirt'},{name:'shoes'}],price:'150$',customer:'sajad',order_date:'19-05-2021',status:'processing',shipping_address:'Rawalpindi St#9 House-780'},
  {id:2,products:[{name:'jacket'},{name:'shirt'}],price:'200$',customer:'ali',order_date:'17-05-2021',status:'completed',shipping_address:'Islamabad Sector-I/10'},
  {id:3,products:[{name:'shoes'},{name:'jacket'}],price:'250$',customer:'omer',order_date:'18-05-2021',status:'processing',shipping_address:'Saddar St#4 House-40'}]
  const products=[{id:1,name:'shirt',price:'50$',picture:'https://cdn.shopify.com/s/files/1/2290/7887/products/image_09bcb033-358d-4d1e-9563-47143d8de7c8_800x1000_crop_center.jpg?v=1619074572',quantity:5,description:'This is Shirt'},
  {id:2,name:'shoes',price:'100$',picture:'https://5.imimg.com/data5/UW/VK/SQ/ANDROID-64440449/product-jpeg-500x500.jpg',quantity:10,description:'This is shoes'},
  {id:3,name:'jacket',price:'150$',picture:'https://www.raramart.co.jp/assets/uploads/products/2019-06-05-11-46-25-7.JPG',quantity:15,description:'This is jacket'}];
  const employees=[{id:1,picture:'https://miro.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg',name:'sajjad',cnic:'11011-2233445-3',dob:'25-August-2000',salary:'100$',doj:'17-May-2017',shift:'Day'}
,{id:2,picture:'https://miro.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg',name:'Usama',cnic:'37405-1133552-4',dob:'18-March-1998',salary:'80$',doj:'25-August-2018',shift:'Day'},
{id:3,picture:'https://miro.medium.com/max/1200/0*pAdZLfSqNrMZAAPA.jpg',name:'Fawad',cnic:'61601-1238445-9',dob:'03-December-1995',salary:'150$',doj:'03-September-2015',shift:'Day'}]
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
          onPress={() => navigation.navigate('Orderslist',orders)}
        >
          <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Orders List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: '#654321',padding:20,margin:20}}
          onPress={() => navigation.navigate('Employeeslist',employees)}
        >
          <Text style={{color:'white',fontSize:20,fontWeight:'600'}}>Employees List</Text>
        </TouchableOpacity>
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  const [getname,setname]=useState('hello');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={()=>({
          headerShown:false
        })}
        />
        <Stack.Screen name="Productslist" component={Productslist} 
         options={({navigation ,route})=>({
          headerTitle: 'List of Products'
        })}
        />
        <Stack.Screen name="Productdetail" component={Productdetail}
        options={({navigation ,route})=>({
          headerTitle: route.params.name
        })}
        />
        <Stack.Screen name="Orderdetail" component={Orderdetail}
        options={({navigation ,route})=>({
          headerTitle: 'Order id : '+route.params.id
        })}
        />
        <Stack.Screen name="Employeedetail" component={Employeedetail}
        options={({navigation ,route})=>({
          headerTitle: route.params.name
        })}
        />
        <Stack.Screen name="Orderslist" component={Orderslist} 
         options={({navigation ,route})=>({
          headerTitle: 'List of Orders'
        })}
        />
        <Stack.Screen name="Employeeslist" component={Employeeslist}
        options={({navigation ,route})=>({
          headerTitle: 'List of Employess'
        })} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
 
 
});
export default App;