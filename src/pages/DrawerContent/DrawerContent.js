import React, { useEffect, useState } from 'react';
import { Text, ImageBackground, View, ScrollView } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

import DrawerBackground from '../../assets/DrawerBackground.jpg';

import { Feather, Entypo } from '@expo/vector-icons';

import styles from './styles';

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
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 25 }}>
                        <Entypo name="images" size={70} color={"#c44ac4"} />
                        <View>
                            <Text style={styles.profileName}>{name}</Text>
                            <Text style={styles.nickname}>{nickname}</Text>
                        </View>
                    </View>

                </ImageBackground>
            </View>

            <View>
                <DrawerItem
                    icon={({ size }) => (
                        <Feather
                            name="home"
                            color="#c44ac4"
                            size={size}
                        />
                    )}
                    label="Home"
                    labelStyle={{ color: "#c44ac4" }}
                    onPress={() => navigation.navigate('Home')}
                />
                <DrawerItem
                    icon={({ size }) => (
                        <Feather
                            name="user"
                            color="#c44ac4"
                            size={size}
                        />
                    )}
                    label="Profile"
                    labelStyle={{ color: "#c44ac4" }}
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>

        </ScrollView>
    )
}
