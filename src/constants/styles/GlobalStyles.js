import { StyleSheet } from "react-native";
import { colors, schoolColors } from "../Colors";
import { fonts, fontSizes } from "../Fonts";
import { normalize } from "react-native-normalize";

export const globalStyles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    centerContent: {
        alignItems: "center",
        justifyContent: "center",
    },
    p10: {
        padding: normalize(10),
    },
    p20: {
        padding: normalize(20),
    },
    m10: {
        margin: normalize(10),
    },
    m20: {
        margin: normalize(20),
    },
    pv10: {
        paddingVertical: normalize(10),
    },
    pv20: {
        paddingVertical: normalize(20),
    },
    ph10: {
        paddingHorizontal: normalize(10),
    },
    ph20: {
        paddingHorizontal: normalize(20),
    },
    mv10: {
        marginVertical: normalize(10),
    },
    mv20: {
        marginVertical: normalize(20),
    },
    mh10: {
        marginHorizontal: normalize(10),
    },
    mh20: {
        marginHorizontal: normalize(20),
    },
    roundedSmall: {
        borderRadius: 5,
    },
    roundedLarge: {
        borderRadius: normalize(10),
    },
    bgPrimary: {
        backgroundColor: colors.primaryBackground,
    },
    bgSecondary: {
        backgroundColor: colors.secondaryBackground,
    },
    bgTertiary: {
        backgroundColor: colors.tertiaryBackground,
    },
    bgTransparent: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
});

export const texts = StyleSheet.create({
    header: {
        fontSize: fontSizes.xl,
        fontFamily: fonts.bold,
        color: colors.primaryText,
    },
    card: {
        fontSize: fontSizes.l,
        fontFamily: fonts.regular,
        color: colors.primaryText,
    },
    regular: {
        fontSize: fontSizes.m,
        fontFamily: fonts.regular,
        color: colors.primaryText,
    },
    searchField: {
        fontSize: fontSizes.l,
        fontFamily: fonts.regular,
        color: colors.primaryText,
    },
});
