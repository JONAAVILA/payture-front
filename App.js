import React, { useCallback } from 'react';
import { Outfit_400Regular,Outfit_500Medium, useFonts } from '@expo-google-fonts/outfit';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import * as SplashScreen from 'expo-splash-screen';
import Main from './Main.jsx';
import { Provider } from 'react-redux';
import store from './src/redux/store.js';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync()

export default function App() {

  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
    Pacifico_400Regular
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
    <SafeAreaProvider>
      <Provider store={store} >
        <Main onLayout={onLayoutRootView}/>
      </Provider>
    </SafeAreaProvider>
  )
}
