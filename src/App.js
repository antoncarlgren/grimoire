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

const Stack = createNativeStackNavigator();

const App = () =>  {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        await loadFonts();
      }
      catch(ex) {
        console.warn(ex);
      }
      finally {
        setLoading(false);
      }
    }

    load();
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if(!loading) {
      await SplashScreen.hideAsync();
    }
  }, [loading]);

  if(loading) {
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
              component={ Home } />
            <Stack.Screen 
              name='SearchResult' 
              component={ SearchResult }
              options={ searchResultOptions } />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

export default App;
