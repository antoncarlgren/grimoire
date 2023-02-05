import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import HomeScreen from './ui/screens/HomeScreen';
import { loadFonts } from './init/InitializeFonts';

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
    return null
  }

  return (
    <HomeScreen />
  );
}

export default App;
