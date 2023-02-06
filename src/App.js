import { View } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './ui/screens/HomeScreen';
import SearchResultScreen from './ui/screens/SearchResultScreen';
import { loadFonts } from './init/InitializeFonts';

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
    <View 
      onLayout={onLayoutRootView}
      style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='SearchResult' component={SearchResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
