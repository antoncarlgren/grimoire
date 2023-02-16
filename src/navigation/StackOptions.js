import { colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { globalStyles } from "../constants/styles/GlobalStyles";
import SearchField from "../ui/components/input/SearchField";
import NavigationSearchHeader from "../ui/components/NavigationSearchHeader";

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
  headerShown: true,

  headerTitleStyle: {
    paddingHorizontal: 10,
  },
  header: () => (
    <NavigationSearchHeader />
  )
};