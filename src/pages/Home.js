import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import openDrawerButton from '../assets/menu.png';

export default function Home({ navigation }) {
    return (
        <>
            <View>
                <TouchableOpacity
                    style={{ alignItems: 'flex-end', marginTop: 50, marginRight: 30 }}
                    onPress={() => navigation.openDrawer()}
                >
                    <Image source={openDrawerButton} />
                </TouchableOpacity>
            </View>

            <Text style={{flex: 1, textAlign: 'center', textAlignVertical: 'center'}}>Home</Text>
        </>
    )
}
