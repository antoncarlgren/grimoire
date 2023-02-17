import { ActivityIndicator, View, StyleSheet } from "react-native";
import { fontSizes } from "../../constants/Fonts";
import { colors } from "../../constants/Colors";
import TextBody from "./text/TextBody";
import { normalize } from "react-native-normalize";
import { getRandomItem } from "../../utils/ArrayUtils";

const LoadingAnimation = () => {
    const loadingMessages = [
        "Studying Grimoire...",
        "Browsing Spellbook...",
        "Unraveling Scrolls...",
    ];

    return (
        <View style={[styles.container]}>
            <ActivityIndicator
                size="large"
                style={[styles.indicator]}
                color={colors.primaryRed}
            />
            <TextBody style={[styles.text]}>
                {getRandomItem(loadingMessages)}
            </TextBody>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    indicator: {
        marginBottom: normalize(30),
    },
    text: {
        fontSize: fontSizes.l,
        color: colors.primaryText,
    },
});

export default LoadingAnimation;
