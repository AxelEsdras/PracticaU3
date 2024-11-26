import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeBaseProvider } from 'native-base';
import HomeScreen from './src/screens/HomeScreen.js';
import DonateScreen from './src/screens/DonateScreen.js';
import TipsScreen from './src/screens/TipsScreen.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Pantalla de selección entre Drawer y Bottom Navigation
function SelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Drawer Navigation"
        onPress={() => navigation.navigate('DrawerNavigation')}
      />
      <Button
        title="Go to Bottom Navigation"
        onPress={() => navigation.navigate('BottomNavigation')}
        style={styles.button}
      />
    </View>
  );
}

// Drawer Navigator (Menú lateral con funcionalidad de volver a selección)
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Ionicons
            name="menu"
            size={30}
            style={{ marginLeft: 15 }}
            onPress={() => navigation.toggleDrawer()} // toggleDrawer asegura contexto correcto
          />
        ),
        headerRight: () => (
          <Ionicons
            name="arrow-back"
            size={25}
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('Selection')}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'black',
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Donate" component={DonateScreen} />
      <Drawer.Screen name="Tips" component={TipsScreen} />
    </Drawer.Navigator>
  );
}

// Bottom Tab Navigator (Navegación inferior con funcionalidad de volver a selección)
function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Donate') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Tips') {
            iconName = focused ? 'list' : 'list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerRight: () => (
          <Ionicons
            name="arrow-back"
            size={25}
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('Selection')}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'black',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Donate" component={DonateScreen} />
      <Tab.Screen name="Tips" component={TipsScreen} />
    </Tab.Navigator>
  );
}

// App Principal
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Pantalla de Selección */}
          <Stack.Screen name="Selection" component={SelectionScreen} />
          {/* Navegación tipo Drawer */}
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigator} />
          {/* Navegación tipo Bottom Tabs */}
          <Stack.Screen name="BottomNavigation" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginVertical: 10,
  },
});
