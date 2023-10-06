import * as ImagePicker from 'expo-image-picker';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, list } from "firebase/storage";
import React, { useState } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Button, Avatar, } from 'react-native-elements';

export default function cadastroContato({ navigation }) {

    const [imageUri, setImageUri] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [images, setImages] = useState([])

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

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({

            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        });

        if (!result.cancelled) {

            setImageUri(result.uri);
            console.log(result.assets);

        }
    };

    const uploadImage = async () => {
        if (!imageUri) {
            Alert.alert('Selecione uma imagem antes de enviar.');
            return;
        }

        // Create a root reference
        const storage = getStorage();

        
        
        // Create a reference to 'mountains.jpg'
        const mountainsRef = ref(storage,
            Math.random() +'.jpg');

        const response = await fetch(imageUri);
        const blob = await response.blob();

        uploadBytes(mountainsRef, blob).then((snapshot) => {

            console.log(snapshot);
        });
    };
    async function LinkImage() {
        // Create a reference under which you want to list
        const storage = getStorage();
        const listRef = ref(storage);

        // Fetch the first page of 100.
       
        const firstPage = await list(listRef, { maxResults: 100 });

        let imagens = firstPage.items.map((item) => {
            return {
                link: 'https://firebasestorage.googleapis.com/v0/b/' +
                item.bucket + '/o/' + item.fullPath + '?alt=media'
            }
        })
        console.log(imagens)
       
        setImages(imagens)
        
    }

    return (
        <>
        
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Escolher Imagem" onPress={pickImage} />
                {imageUri && <Image source={{ uri: imageUri }} style={{
                    width: 200,
                    height: 200, marginVertical: 20
                }} />}
                {uploading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <Button title="Enviar Imagem" onPress={uploadImage} disabled=
                        {!imageUri} />
                )}
                <Button title="Ver Imagens" onPress={LinkImage} />
            

            {
 images ? images.map((l, i) => (
    <Image source={{uri: l.link}} style={{
        width: 200,
        height: 200, marginVertical: 20
    }} />
    )) : false
  }
</View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

        justifyContent: 'center',
        alignItems: 'center'
    },
});


