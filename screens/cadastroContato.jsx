import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button, Header  } from 'react-native-elements';
import axios from 'axios';


export default function cadastroContato({navigation}) {

  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [ava, setAva] = useState();

  function inserirDados(){
    axios.put('http://localhost:3000/contato', {
    nome: nome,
    telefone: telefone,
    email: email,
    avatar_url: ava
    }).then(function (response) {
    console.log(response);
    navigation.navigate('listaContato')
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }
    return (
      <> <Header 
      leftComponent={{icon:'home',onPress:()=>navigation.navigate('cadastroContato'), style: {fontSize:30}}}
        centerComponent={{text:'Novo Contato', style:{color: 'white', fontSize: 27}}} 
        
        />
      <View style={[styles.container]}>
      <Text style={{fontSize: 29,fontWeight:'bold'}}>Cadastro de novo contato</Text>
      
      <Input
  placeholder='nome'
  value={nome}
  onChange={e => setNome(e.target.value)}
/>
<Input
  placeholder='email'
  value={email}
  onChange={e => setEmail(e.target.value)}
/>
<Input
  placeholder='telefone'
  value={telefone}
  onChange={e => setTelefone(e.target.value)}
/>
<Input
  placeholder='url do avatar'
  value={ava}
  onChange={e => setAva(e.target.value)}
/>

<Text></Text>
<Button title="cadastrar" type="outline"  onPress={()=>{inserirDados()}}/>
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


