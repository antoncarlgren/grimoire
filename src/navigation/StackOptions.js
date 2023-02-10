import { colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";

export const defaultOptions = {
  headerShown: false,
  headerTitleAlign: 'center',
  headerTintColor: colors.primaryRed,
  headerTitleStyle: {
    fontFamily: fonts.bold,
  },
  headerStyle: {
    backgroundColor: colors.primaryBackground
  }
};

export const searchResultOptions = {
  headerTitle: 'Search Results',
  headerShown: true
};