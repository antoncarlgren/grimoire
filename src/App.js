import { View } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './ui/screens/Home';
import SearchResult from './ui/screens/SearchResult';
import { loadFonts } from './init/InitializeFonts';
import { defaultOptions, searchResultOptions } from './navigation/StackOptions';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

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
    <>
    <StatusBar style='light'/>
      <View 
        onLayout={ onLayoutRootView }
        style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={ defaultOptions }>
            <Stack.Screen 
              name='Home' 
              component={ Home }/>
            <Stack.Screen 
              name='SearchResult' 
              component={ SearchResult }
              options={ searchResultOptions }  />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

export default App;
