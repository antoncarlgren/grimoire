import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import HomeScreen from './ui/screens/HomeScreen';
import { loadFonts } from './init/InitializeFonts';
import { View } from 'react-native';

const App = () =>  {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        await loadFonts();
      }
      catch(ex) {
        console.warn(ex);
      }
      finally {
        setLoaded(true);
      }
    }

    load();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if(isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if(!isLoaded) {
    return null;
  }

  return (
    <HomeScreen onLayout={onLayoutRootView} />
  );
}

export default App;
