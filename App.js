import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FONTS } from "./src/constants/fonts"
import { useCallback } from 'react';
import AppNavigation from './src/navigations/AppNavigation';

SplashScreen.preventAutoHideAsync()

const App = () => {
  const [fontsLoaded] = useFonts(FONTS);
  const onLayoutRootView = useCallback(async () => {
    if (!!fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AppNavigation />
    </SafeAreaProvider>
  );
}

export default App;
