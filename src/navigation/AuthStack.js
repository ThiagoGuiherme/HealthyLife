import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/login/LoginScreen'
import RegisterScreen from '../screens/register/RegisterScreen'
import HomeScreen from '../screens/home/HomeScreen'
import NotasScreen from '../screens/notas/NotasScreen'

import HorasSonoScrenn from '../screens/sono/HorasSonoScrenn'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Notas" component={NotasScreen} />
      <Stack.Screen name="Sono" component={HorasSonoScrenn} />
      
      
     
     
    </Stack.Navigator>
  )
}

export default AuthStack
