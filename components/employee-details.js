import * as React from 'react';
import { Button, View, Text,Image, TouchableOpacity, FlatList,ScrollView,SafeAreaView } from 'react-native';
function Employeedetail({navigation,route}) {
   
    return (
        <SafeAreaView>
            <ScrollView>
      <View style={{ flex: 1, justifyContent:'flex-start',marginTop:5}}>
        <View>
        <View >
        <Image
              style={{width:450,height:600}}
              source={{uri: route.params.picture}}
            />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Name :</Text>
         <Text style={{fontSize:18}}>{route.params.name}</Text>
         
         
        
        </View>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>ID :</Text>
         <Text style={{fontSize:18}}>{route.params.id}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Date of Birth :</Text>
         <Text style={{fontSize:18}}>{route.params.dob}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>CNIC :</Text>
         <Text style={{fontSize:18}}>{route.params.cnic}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Salary :</Text>
         <Text style={{fontSize:18}}>{route.params.salary}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Date of Joining :</Text>
         <Text style={{fontSize:18}}>{route.params.doj}</Text>
        
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>Shift :</Text>
         <Text style={{fontSize:18}}>{route.params.shift}</Text>
        
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
export default Employeedetail;