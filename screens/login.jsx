import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button  } from 'react-native-elements';


function login({navigation}) {
    return (
        <View style={[styles.container]}>
      
        <Avatar containerStyle={[styles]} size="large"
        rounded source={{
      uri:
      'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    }}/>
       <Input
    placeholder='email'
  />
  <Input
    placeholder='senha'
  />
  <Button title="enviar" containerStyle={{width:100}} onPress={()=>navigation.navigate('listaContato')}/>
  <Text> </Text>
  <Button title="cadastro" containerStyle={{width:100}} onPress={()=>navigation.navigate('cadastro')}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

justifyContent: 'center',
alignItems:'center'},
});


export default login;