import * as React from 'react';
import { Button, View, Text,Image, TouchableOpacity, FlatList,ScrollView,SafeAreaView } from 'react-native';
function Productdetail({navigation,route}) {
   
    return (
        <SafeAreaView>
            <ScrollView>
      <View style={{ flex: 1, justifyContent:'flex-start',marginTop:5}}>
        <View>
        <Image
              style={{width:450,height:600}}
              source={{uri: route.params.picture}}
            />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Product Name :</Text>
         <Text style={{fontSize:18}}>{route.params.name}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Product Price :</Text>
         <Text style={{fontSize:18}}>{route.params.price}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Product Quantity :</Text>
         <Text style={{fontSize:18}}>{route.params.quantity}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Product Description :</Text>
         <Text style={{fontSize:18}}>{route.params.description}</Text>
        
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
export default Productdetail;