import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import { EvilIcons, AntDesign, Entypo } from '@expo/vector-icons';

import headerBackgroundImg from '../../assets/HeaderBackgroundImage.jpg';

import styles from './styles';

export default function Home({ navigation }) {
    const [isItemVisible, setIsItemVisible] = useState(false);

    function handleToggleItemVisible() {
        setIsItemVisible(!isItemVisible);
    }

    return (
        <>
            <View style={styles.header}>
                <ImageBackground
                    source={headerBackgroundImg}
                    style={styles.headerBackImg}
                    imageStyle={{ borderBottomLeftRadius: 10 }}
                >

                    <AntDesign name="rocket1" size={80} color="#fff" />

                    <View style={styles.titleBlock}>

                        <Text style={styles.title}>HomePage</Text>

                        <TouchableOpacity onPress={handleToggleItemVisible} style={styles.openItemButton}>
                            <Entypo name="chevron-small-down" size={30} color="#fff" />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                    >
                        <EvilIcons name="navicon" size={50} color="#fff" />
                    </TouchableOpacity>

                </ImageBackground>
            </View>

            {isItemVisible && (
                <View style={styles.itemContainer}>

                </View>
            )}
        </>
    )
}
