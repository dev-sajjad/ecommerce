import * as React from 'react';
import { Button, View, Text,Image, TouchableOpacity, FlatList } from 'react-native';
function Productslist({navigation,route}) {
   
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start',margin:50 }}>
        <Text style={{fontSize:22,fontWeight:'600',marginBottom:20}}>Products list</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Image</Text>
         <Text style={{fontSize:18}}>Name</Text>
         <Text style={{fontSize:18}}>Price</Text>
        </View>
        <View>
        <FlatList
        data={[...route.params]}
        renderItem={({item},index)=>(
            <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
            <Image
              style={{width:50,height:50}}
              source={{uri:item.picture}}
            />
             <Text style={{fontSize:18}}>{item.name}</Text>
             <Text style={{fontSize:18}}>{item.price}</Text>
            </View>
        )}
        
        />

        </View>
        
        <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        >
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
        <Image
          style={{width:50,height:50}}
          source={{uri: 'https://www.affordable.pk/uploads/products/thumbs/large_15556869010_braun_f.jpg'}}
        />
         <Text style={{fontSize:18}}>Shirt</Text>
         <Text style={{fontSize:18}}>50$</Text>
        </View>

        </TouchableOpacity>
        
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
        <Image
          style={{width:50,height:50}}
          source={{uri: 'https://5.imimg.com/data5/UW/VK/SQ/ANDROID-64440449/product-jpeg-500x500.jpg'}}
        />
         <Text style={{fontSize:18}}>Shoes</Text>
         <Text style={{fontSize:18}}>100$</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
        <Image
          style={{width:50,height:50}}
          source={{uri: 'https://www.raramart.co.jp/assets/uploads/products/2019-06-05-11-46-25-7.JPG'}}
        />
         <Text style={{fontSize:18}}>Jacket</Text>
         <Text style={{fontSize:18}}>150$</Text>
        </View>
      </View>
    );
  }
export default Productslist;