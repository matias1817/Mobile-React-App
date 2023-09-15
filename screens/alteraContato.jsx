import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button} from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { ListItem, Header } from 'react-native-elements'
import axios from 'axios';



export default function alteraContato({route, navigation}) {

  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [ava, setAva] = useState('');

  useEffect(() => {

    setNome(route.params.nome);
    setEmail(route.params.email);
    setAva(route.params.avatar_url);
    setTelefone(route.params.telefone);
    
  }, [])

  function excluirDados(){

    axios.delete('http://localhost:3000/contato/'+route.params.id)
    .then(function (response) {
    console.log(response);
    navigation.navigate('listaContato')
    }).catch(function (error) {
    console.log(error);
    
    });
    
    }

  function alterarDados(){

    axios.put('http://localhost:3000/contato/'+route.params.id, 
    {
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
       
        centerComponent={{text:'Alterar Contatos', style:{color: 'white', fontSize: 27}}} 
        
        />
      <View style={[styles.container]}>
       
      {/* <Text style={{fontSize: 29,fontWeight:'bold'}}>Alteração do contato</Text>
       */}

      
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

<Text> </Text>
<Button title="cadastrar" type="outline" buttonStyle = {{width:100}} onPress={()=>{alterarDados()}}/>
<Text> </Text>
<Button title="excluir" type="outline" buttonStyle = {{borderColor:"red", width:100}} titleStyle = {{color: "red"}} onPress={()=>{excluirDados()}} />
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


