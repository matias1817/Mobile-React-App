import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button} from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { ListItem, Header } from 'react-native-elements'



export default function alteraContato({route, navigation}) {
    return (
      <> <Header 
        leftComponent={{icon:'home',onPress:()=>navigation.navigate('cadastroContato'), style: {fontSize:30}}}
       
        centerComponent={{text:'Alterar Contatos', style:{color: 'white', fontSize: 27}}} 
        
        />
      <View style={[styles.container]}>
       
      {/* <Text style={{fontSize: 29,fontWeight:'bold'}}>Alteração do contato</Text>
       */}

      
      <Input
      value={route.params.nome}

/>
<Input
  placeholder=  {route.params.fone}
/>
<Input
  placeholder =  {route.params.email}
/>

<Text> </Text>
<Button title="cadastrar" type="outline" buttonStyle = {{width:100}} onPress={()=>navigation.navigate('listaContato')}/>
<Text> </Text>
<Button title="excluir" type="outline" buttonStyle = {{borderColor:"red", width:100}} titleStyle = {{color: "red"}} onPress={()=>navigation.navigate('listaContato')}/>
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


