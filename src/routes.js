import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Profile from './pages/Profile';
import DrawerContent from './pages/DrawerContent';

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

