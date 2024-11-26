import React from 'react';
import { View, Text, Button } from 'react-native';

function TipsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tips Screen</Text>
            <Button
        title="Return to Home" 
        onPress={() => navigation.navigate('Home')}
      />
        </View>
    );
}

export default TipsScreen;