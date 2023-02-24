import { View } from "react-native";
import { useState, useCallback, useEffect } from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider as PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./ui/screens/Home";
import SearchResult from "./ui/screens/SearchResult";
import { loadFonts } from "./init/InitializeFonts";
import { defaultOptions, searchResultOptions } from "./navigation/StackOptions";
import RealmContext from "./realm/RealmConfig";
import LoadingAnimation from "./ui/components/LoadingAnimation";

const { RealmProvider } = RealmContext;
const Stack = createNativeStackNavigator();

const Main = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                await loadFonts();
            } catch (error) {
                console.warn(error);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (!loading) {
            await SplashScreen.hideAsync();
        }
    }, [loading]);

    if (loading) {
        return null;
    }

    return (
        <RealmProvider fallback={() => <LoadingAnimation />}>
            <PaperProvider>
                <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={defaultOptions}>
                            <Stack.Screen name="Home" component={Home} />
                            <Stack.Screen
                                name="SearchResult"
                                component={SearchResult}
                                options={searchResultOptions}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </PaperProvider>
        </RealmProvider>
    );
};

AppRegistry.registerComponent(appName, () => Main);

export default Main;
