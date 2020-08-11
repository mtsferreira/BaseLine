import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';

import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
      <StatusBar style="light"/>
      <Routes />
      </>
    );
  }
}


