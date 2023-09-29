import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Input } from 'react-native-elements';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { toast } from 'react-toastify';
import {  signInWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




function login({navigation}) {

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

  function loga(){
     const auth = getAuth();
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigation.navigate('listaContato')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  const provider = new GoogleAuthProvider();

 function logagoogle(){ 
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
 }
  

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
  
  // signInWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  // // Signed in
  // const user = userCredential.user;
  // // ...
  // })
  // .catch((error) => {
  // const errorCode = error.code;
  // const errorMessage = error.message;
  // });
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
  <Button title="enviar" containerStyle={{width:100}} onPress={()=>{loga()}}/>
  <Text> </Text>  
  <Button title="Google" containerStyle={{width:100}} onPress={()=>{logagoogle()}}/>
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