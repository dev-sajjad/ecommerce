import * as React from 'react';
import { Button, View, Text,Image, TouchableOpacity, FlatList } from 'react-native';
import setname from '../App';
function Employeeslist({navigation,route}) {
   
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start',margin:50 }}>
        <Text style={{fontSize:22,fontWeight:'600',marginBottom:20}}>Employees list</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
         <Text style={{fontSize:18}}>ID</Text>
         <Text style={{fontSize:18}}>Picture</Text>
         <Text style={{fontSize:18}}>Name</Text>
        </View>
        <View>
        <FlatList
        data={[...route.params]}
        renderItem={({item},index)=>(
          <TouchableOpacity
          onPress={() =>{ 
            navigation.navigate('Employeedetail',item)}}
          >
            <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:2,padding:20}}>
            
             <Text style={{fontSize:18}}>{item.id}</Text>
             <Image
              style={{width:50,height:50}}
              source={{uri:item.picture}}
            />
             <Text style={{fontSize:18}}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        )}/>
        </View>
      </View>
    );
  }
export default Employeeslist;