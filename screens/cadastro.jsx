import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button, Header  } from 'react-native-elements';



export default function cadastro({navigation}) {
    return (
      <> <Header 
      leftComponent={{icon:'home',onPress:()=>navigation.navigate('cadastroContato'), style: {fontSize:30}}}
        centerComponent={{text:'Cadastro de Usuario', style:{color: 'white', fontSize: 27}}} 
        
        />
      <View style={[styles.container]}>
      <Text style={{fontSize: 29,fontWeight:'bold'}}>Cadastro</Text>
      
      <Input
  placeholder='nome'
/>
<Input
  placeholder='email'
/>
<Input
  placeholder='cpf'
/>

<Input
  placeholder='senha'
/>

<Text></Text>
<Button title="cadastrar" type="outline"  onPress={()=>navigation.navigate('login')}/>
</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

justifyContent: 'center',
alignItems:'center'},
});


