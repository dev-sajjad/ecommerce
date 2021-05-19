import * as React from 'react';
import { Button, View, Text,Image, TouchableOpacity, FlatList } from 'react-native';
import setname from '../App';
function Orderslist({navigation,route}) {
   
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start',margin:50 }}>
        <Text style={{fontSize:22,fontWeight:'600',marginBottom:20}}>Orders list</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Order ID</Text>
         <Text style={{fontSize:18}}>Products</Text>
         <Text style={{fontSize:18}}>Total Price</Text>
        </View>
        <View>
        <FlatList
        data={[...route.params]}
        renderItem={({item},index)=>(
          <TouchableOpacity
          onPress={() =>{ 
            navigation.navigate('Orderdetail',item)}}
          >
            <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
            <Text style={{fontSize:18}}>{item.id}</Text>
             <FlatList
             data={[...item.products]}
             renderItem={({item},index)=>(
               <Text style={{fontSize:18}}>{item.name},</Text>
             )}
             />
             <Text style={{fontSize:18}}>{item.price}</Text>
            </View>
            </TouchableOpacity>
        )}/>
        </View>
      </View>
    );
  }
export default Orderslist;