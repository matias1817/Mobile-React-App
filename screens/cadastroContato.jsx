import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button  } from 'react-native-elements';



export default function cadastroContato({navigation}) {
    return (
      <View style={[styles.container]}>
      <Text style={{fontSize: 29,fontWeight:'bold'}}>Cadastro de novo contato</Text>
      
      <Input
  placeholder='nome'
/>
<Input
  placeholder='email'
/>
<Input
  placeholder='telefone'
/>

<Text></Text>
<Button title="cadastrar" type="outline"  onPress={()=>navigation.navigate('listaContato')}/>
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


