import React from 'react';
import { Text, ImageBackground, View, Image, ScrollView, StyleSheet } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';

import backgroundImg from '../assets/background.png';
import profileImg from '../assets/matiutiu.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent({navigation}) {
    return (
        <ScrollView>
            <ImageBackground
                source={backgroundImg}
                style={styles.backgroundImg}
            >
                <Image source={profileImg} style={styles.profileImg} />
                <Text style={styles.textProfile}>Mateus Ferreira</Text>
                <Text style={styles.followers}>(Matiutiu) ♥</Text>

            </ImageBackground>

            <View>
                <DrawerItem 
                    icon={({color,size}) => (
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
                    icon={({color,size}) => (
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
    backgroundImg: {
        height: 190,
        width: '100%',
        justifyContent: 'center'
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

    textProfile: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#fff'
    },
    followers: {
        fontSize: 14,
        marginLeft: 20,
    }
});