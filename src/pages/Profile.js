import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import openDrawerButton from '../assets/menu.png';
import backgroundImage from '../assets/ProfileBackground.jpg';

export default function Profile({ navigation }) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');


    async function storeProfileInfo() {
        try {
            await AsyncStorage.clear();
            await AsyncStorage.setItem('username', name);
            await AsyncStorage.setItem('usernickname', nickname);

            Keyboard.dismiss(); //fecha o teclado
            Alert.alert("Sucesso", "Dados salvos com sucesso!");

            console.log(name, nickname);

        }catch(err) {
            alert('Erro no Procedimento.')
        }
    }


    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImg} blurRadius={1}>
            <TouchableOpacity 
                style={styles.drawerButton}
                onPress={() => navigation.openDrawer()}
            >
                <Image source={openDrawerButton}/>
            </TouchableOpacity>

            <View style={styles.container}>

                <Text>Profile</Text>

                <TextInput 
                    style={styles.input}
                    placeholder='User name' placeholderTextColor='#ddd'
                    maxLength={25}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Nickname' placeholderTextColor='#ddd'
                    maxLength={20}
                    value={nickname}
                    onChangeText={setNickname}
                />

                <TouchableOpacity style={styles.acceptButton} onPress={storeProfileInfo}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImg: {
        width: '100%', 
        height: '100%'
    },
    drawerButton: {
        alignItems: 'flex-end', 
        marginTop: 50, 
        marginRight: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 225,
        margin: 30,
        borderBottomWidth: 1,
        borderColor: '#993399',
    },
    acceptButton: {
        width: 125,
        height: 25,
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 90,
        borderRadius: 15,
        backgroundColor: '#c44ac4',
    },
    acceptText: {
        color: '#fff',
    },
});