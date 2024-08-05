
import React, { useCallback } from 'react';
import { Outfit_400Regular,Outfit_500Medium, useFonts } from '@expo-google-fonts/outfit';
import * as SplashScreen from 'expo-splash-screen';
import Main from './Main.jsx';

SplashScreen.preventAutoHideAsync()

export default function App() {

  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
      <Main onLayout={onLayoutRootView} />
  );
}
