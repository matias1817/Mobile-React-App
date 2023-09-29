import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button  } from 'react-native-elements';
import { ListItem, Header } from 'react-native-elements'
import { FAB } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
  import { getAuth, signOut } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


function listaContato({navigation}) {

  const firebaseConfig = {
    apiKey: "AIzaSyDW48h4GNzH9rib4NXk6EVxQhuS2FtsOws",
    authDomain: "aula-mobile-71ce9.firebaseapp.com",
    projectId: "aula-mobile-71ce9",
    storageBucket: "aula-mobile-71ce9.appspot.com",
    messagingSenderId: "814080391813",
    appId: "1:814080391813:web:41998571d3ee9ab69e87ec",
    measurementId: "G-H20G3G28Q7"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function desloga (){
  const auth = getAuth();
signOut(auth).then(() => {
  navigation.navigate('login')
// Sign-out successful.
}).catch((error) => {
// An error happened.
});
}


  
 const [list, SetList] = useState([])
const isFocused = useIsFocused()
 useEffect(() => {

  axios.get('http://localhost:3000/contato')
  .then(function (response) {
  console.log(response);
    SetList(response.data)
  }).catch(function (error) {
  console.log(error);
  
  });
}, [isFocused])
  

     
    
    return (


        <View >
            <Header leftComponent={
              {icon:'home', style: {fontSize:30} , onPress:()=>navigation.navigate('cadastroContato')} }

         centerComponent={{text:'Lista de Contatos', style:{color: 'white', fontSize: 27}}} rightComponent={<FAB icon='add' title={'+'} titleStyle = {{fontSize: 24}} color='transparent' size='small' onPress={()=>navigation.navigate('cadastroContato')}/> }/>
{
list.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() =>
        navigation.navigate('alteraContato', {id:l.id, nome: l.nome, telefone: l.telefone,email: l.email,avatar_url: l.avatar_url }) }>
        <Avatar source={{uri: l.avatar_url}}  />
        
        <ListItem.Content > 
          <ListItem.Title >{l.nome}</ListItem.Title>
          <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }

<Button title="log out" containerStyle={{width:100}} onPress={()=>{desloga()}}/>
      </View>
  );
}


export default listaContato;

