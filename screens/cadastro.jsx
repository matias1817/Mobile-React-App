import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button, Header  } from 'react-native-elements';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function cadastro({navigation}) {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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

  
  const [email, setEmail] = useState();
 
  const [senha, setSenha] = useState()
  const auth = getAuth();

  
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigation.navigate('login')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

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
  placeholder='email'
  onChange={e => setEmail(e.target.value)}
/>


<Input
  placeholder='senha'
  onChange={e => setSenha(e.target.value)}
/>

<Text></Text>
<Button title="cadastrar" type="outline"  onPress={()=>{createUserWithEmailAndPassword}}/>
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


