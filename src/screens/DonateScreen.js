import React from 'react';
import { View, Text, Button } from 'react-native';

function DonateScreen({ navigation, route }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Donate Screen</Text>  
      <Button
        title="Return to Home" 
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default DonateScreen;