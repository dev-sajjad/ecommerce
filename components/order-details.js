import * as React from 'react';
import { Button, View, Text,Image, TouchableOpacity, FlatList,ScrollView,SafeAreaView } from 'react-native';

function Orderdetail({navigation,route}) {
   
    return (
        <SafeAreaView>
            <ScrollView>
      <View style={{ flex: 1, justifyContent:'flex-start',marginTop:50}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Order ID :</Text>
         <Text style={{fontSize:18}}>{route.params.id}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Products :</Text>
         <FlatList 
         data={[...route.params.products]}
         renderItem={({item},index)=>(
            <Text style={{fontSize:18,textAlign:'right'}}>{item.name},</Text>
          )}
          
         />
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Total Price:</Text>
         <Text style={{fontSize:18}}>{route.params.price}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Order Status :</Text>
         <Text style={{fontSize:18}}>{route.params.status}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Customer Name :</Text>
         <Text style={{fontSize:18}}>{route.params.customer}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Shipping Address :</Text>
         <Text style={{fontSize:18}}>{route.params.shipping_address}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Order Date :</Text>
         <Text style={{fontSize:18}}>{route.params.order_date}</Text>
        
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
export default Orderdetail;