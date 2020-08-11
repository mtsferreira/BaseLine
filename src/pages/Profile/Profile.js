import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import backgroundImage from '../../assets/ProfileBackground.jpg';

import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';

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
                <EvilIcons name="navicon" size={50} color="#c44ac4"/>
            </TouchableOpacity>

            <View style={styles.container}>

                <Text>Profile</Text>

                <TextInput 
                    style={styles.input}
                    placeholder='User name' placeholderTextColor='#ddd'
                    maxLength={15}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Nickname' placeholderTextColor='#ddd'
                    maxLength={10}
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
