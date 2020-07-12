import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, View, Image, ScrollView, StyleSheet } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

import DrawerBackground from '../assets/DrawerBackground.jpg';
import profileImg from '../assets/matiutiu.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent({ navigation }) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    async function setProfile() {

        let name = await AsyncStorage.getItem('username');
        let nickname = await AsyncStorage.getItem('usernickname');

        if (name !== null || nickname !== null) {
            setName(name);
            setNickname(nickname);
        }
    }

    useEffect(() => {
        setProfile();
    }, [setProfile]);



    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground
                    source={DrawerBackground}
                    style={styles.backgroundImg}
                >

                        <Image source={profileImg} style={styles.profileImg} />
                        <Text style={styles.profileName}>{name}</Text>
                        <Text style={styles.followers}>{nickname} ♥</Text>

                </ImageBackground>
            </View>

            <View>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="home"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Home"
                    onPress={() => navigation.navigate('Home')}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="account"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderBottomEndRadius: 5,
        borderColor: '#c44ac4',
    },
    backgroundImg: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
    },

    profileImg: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: "#fff",
        marginTop: 20,
        marginLeft: 20,
    },

    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 3,
        color: '#fff'
    },
    followers: {
        fontSize: 14,
        marginLeft: 40,
        marginTop: 5
    },
    reloadButton: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 150,
    },
});