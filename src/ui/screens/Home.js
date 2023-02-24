import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { paths } from "../../constants/ApiConfig";
import { globalStyles } from "../../constants/styles/GlobalStyles";
import { normalize } from "react-native-normalize";
import * as SearchOptions from "../../constants/SearchOptions";
import ContentContainer from "../components/containers/ContentContainer";
import HomeHeader from "../components/text/HomeHeader";
import MainButton from "../components/input/MainButton";
import { colors } from "../../constants/Colors";
import { useStorage } from "../../hooks/useStorage";

const HomeScreen = ({ navigation }) => {
    const storage = useStorage();
    return (
        <ContentContainer style={[styles.container]}>
            <KeyboardAvoidingView
                style={[globalStyles.centerContent]}
                behavior="position"
            >
                <View style={[styles.homeImageWrapper]}>
                    <Image
                        style={[styles.homeImage]}
                        source={require("../../assets/images/hat.png")}
                    />
                </View>
                <HomeHeader>GRIMOIRE</HomeHeader>
                <MainButton
                    title="Spells"
                    color={colors.primaryBlue}
                    onPress={() => {
                        navigation.navigate(
                            "SearchResult",
                            SearchOptions.spellSearchOptions
                        );
                    }}
                />
                <MainButton
                    title="Magic Items"
                    color={colors.primaryOrange}
                    onPress={() => {
                        navigation.navigate(
                            "SearchResult",
                            SearchOptions.magicItemSearchOptions
                        );
                    }}
                />
                <MainButton
                    title="fuck up the database"
                    color={colors.primaryRed}
                    onPress={() => {
                        storage.clearStorage();
                        storage.clearMemoryCache();
                    }}
                />
            </KeyboardAvoidingView>
        </ContentContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    homeImageWrapper: {
        marginTop: normalize(20),
        marginBottom: normalize(20),
    },
    homeImage: {
        width: normalize(288),
        height: normalize(288),
        resizeMode: "contain",
    },
    titleWrapper: {
        alignSelf: "flex-start",
    },
});

export default HomeScreen;
