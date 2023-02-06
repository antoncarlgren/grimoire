import { StyleSheet } from "react-native";
import { colors } from "../Colors";
import { fonts, textSizes } from "../Fonts";

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  p10: {
    padding: 10
  },
  p20: {
    padding: 20
  },
  m10: {
    margin: 10
  },
  m20: {
    margin: 20
  },
  pv10: {
    paddingVertical: 10
  },
  pv20: {
    paddingVertical: 20
  },
  ph10: {
    paddingHorizontal: 10
  },
  ph20: {
    paddingHorizontal: 10
  },
  mv10 : {
    paddingVertical: 10
  },
  mv20: {
    paddingVertical: 20
  },
  mh10: {
    paddingHorizontal: 10
  },
  mh20: {
    paddingHorizontal: 20
  },
  roundedSmall: {
    borderRadius: 5
  },
  roundedLarge: {
    borderRadius: 10
  },
  bgPrimary: {
    backgroundColor: colors.primaryBackground
  },
  bgSecondary: {
    backgroundColor: colors.secondaryBackground
  },
  bgTertiary : {
    backgroundColor: colors.tertiaryBackground
  },
  bgTransparent: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
});

export const texts = StyleSheet.create({
  header: {
    fontSize: textSizes.xl,
    fontFamily: fonts.bold,
    color: colors.primaryText
  },
  regular: {
    fontSize: textSizes.m,
    fontFamily: fonts.regular,
    color: colors.primaryText
  }
});