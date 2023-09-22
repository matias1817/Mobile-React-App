import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { toast } from 'react-toastify';




function login({navigation}) {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
 
  const notify = () => toast("Wow so easy!");
  function login() {
    axios.get('http://localhost:3000/usuario?email=' + email + '&senha=' + senha).then(function (response) {
      if (response.data.length == 0) {
        showMessage({
          message: "Login e senha inválido",
          type: "danger",
        });
      } else {

        navigation.navigate('listaContato')
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
 
    return (
        <View style={[styles.container]}>
      <FlashMessage position="top" />
        <Avatar containerStyle={[styles]} size="large"
        rounded source={{
      uri:
      'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    }}/>
       <Input
    placeholder='email'
    value={email}
    onChange={e => setEmail(e.target.value)}
  />
  <Input
    placeholder='senha'
    value={senha}
    onChange={e => setSenha(e.target.value)}
  />
  <Button title="enviar" containerStyle={{width:100}} onPress={()=>{login()}}/>
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