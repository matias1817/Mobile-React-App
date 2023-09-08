import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { Input,  Avatar, Button  } from 'react-native-elements';
import { ListItem, Header } from 'react-native-elements'
import { FAB } from 'react-native-elements';



const list = [
    {
      name: 'Zé Cunha',
      avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      subtitle: '81 96854-3456',
      email: 'zé@gmail.com'
    },
    {
      name: 'Ednalvison Silva',
      avatar_url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      subtitle: '87 93658-1634',
      email:"ednalvinhoh@gmail.com"
    },
    {
        name: 'Jucilene Silva',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfg89HB0svXVhC2QvP0ixVKdb1qhYVpjDLhiqqmTtZNiMxNBCS4Q48Vn9_nB8VDCC8wU&usqp=CAU',
        subtitle: '87 93658-1634',
        email:"jucilene@hotmail"
      },{
        name: 'Jessica Normanda',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfg89HB0svXVhC2QvP0ixVKdb1qhYVpjDLhiqqmTtZNiMxNBCS4Q48Vn9_nB8VDCC8wU&usqp=CAU',
        subtitle: '87 93658-1634',
        email:"jessicaN@gmail.com"
      }
    
  ]

function listaContato({navigation}) {
    return (


        <View >
            <Header leftComponent={
              {icon:'home', style: {fontSize:30} , onPress:()=>navigation.navigate('cadastroContato')} }

         centerComponent={{text:'Lista de Contatos', style:{color: 'white', fontSize: 27}}} rightComponent={<FAB icon='add' title={'+'} titleStyle = {{fontSize: 24}} color='transparent' size='small' onPress={()=>navigation.navigate('cadastroContato')}/> }/>
{
list.map((l, i) => (
      <ListItem key={i} bottomDivider onPress={() =>
        navigation.navigate('alteraContato', { nome: l.name, fone: l.subtitle,email: l.email }) }>
        <Avatar source={{uri: l.avatar_url}}  />
        
        <ListItem.Content > 
          <ListItem.Title >{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
      </View>
  );
}


export default listaContato;

