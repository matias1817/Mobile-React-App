import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import InicioScreen from './screens/inicial';
import cadastro from './screens/cadastro';
import login from './screens/login';
import cadastroContato from './screens/cadastroContato';
import listaContato from './screens/listaContatos';
import alteraContato from './screens/alteraContato';
import upload from './screens/upload'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="upload">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="inicio" component={InicioScreen} options={{headerShown:false}} />
        <Stack.Screen name="cadastro" component={cadastro} options={{headerShown:false}} />
        <Stack.Screen name="login" component={login} options={{headerShown:false}} />
        <Stack.Screen name="cadastroContato" component={cadastroContato} options={{headerShown:false}} />       
        <Stack.Screen name="alteraContato" component={alteraContato} options={{headerShown:false}} /> 
        <Stack.Screen name="listaContato" component={listaContato} options={{headerShown:false}} />
        <Stack.Screen name="upload" component={upload} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;