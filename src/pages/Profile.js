import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

import openDrawerButton from '../assets/list.png';

export default function Profile({ navigation }) {
    return (
        <>
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
                    placeholder='user name' placeholderTextColor='#999'
                    maxLength={25}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='nickname' placeholderTextColor='#999'
                    maxLength={20}
                />

                <TouchableOpacity style={styles.acceptButton}>
                    <Text style={styles.acceptText}>Accept</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
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
        borderRadius: 15,
        backgroundColor: '#c44ac4',
    },
    acceptText: {
        color: '#fff',
    },
});