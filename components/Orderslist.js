import * as React from 'react';
import { Button, View, Text } from 'react-native';
function Orderslist({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Order List</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Home')}
        />
      </View>
    );
  }
export default Orderslist;