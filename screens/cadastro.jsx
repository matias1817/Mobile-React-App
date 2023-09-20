import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button, Header  } from 'react-native-elements';
import axios from 'axios';


export default function cadastro({navigation}) {

  const [nome, setNome] = useState()
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [senha, setSenha] = useState()

  function inserirDados(){
    axios.post('http://localhost:3000/usuario', {
    nome: nome,
    email: email,
    cpf: cpf,
    senha: senha
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
        centerComponent={{text:'Cadastro de Usuario', style:{color: 'white', fontSize: 27}}} 
        
        />
      <View style={[styles.container]}>
      <Text style={{fontSize: 29,fontWeight:'bold'}}>Cadastro</Text>
      
      <Input
  placeholder='nome'
  onChange={e => setNome(e.target.value)}
/>
<Input
  placeholder='email'
  onChange={e => setEmail(e.target.value)}
/>
<Input
  placeholder='cpf'
  onChange={e => setCpf(e.target.value)}
/>

<Input
  placeholder='senha'
  onChange={e => setSenha(e.target.value)}
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


