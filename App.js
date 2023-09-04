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



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="inicio" component={InicioScreen} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastroContato" component={cadastroContato} />       
        <Stack.Screen name="alteraContato" component={alteraContato} /> 
        <Stack.Screen name="listaContato" component={listaContato} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;