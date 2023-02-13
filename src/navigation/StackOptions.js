import { colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { globalStyles } from "../constants/styles/GlobalStyles";
import SearchField from "../ui/components/input/SearchField";
import NavigationHeader from "../ui/components/NavigationHeader";

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
  headerTitleContainerStyle: {
    width: '50%'
  },
  headerTitleStyle: {
    paddingHorizontal: 10,
  },
  header: () => (
    <NavigationHeader>
      <SearchField
        style={ [globalStyles.mh10] }
        placeholder='Refine your search' />
    </NavigationHeader>
  ),
  animation: 'simple_push'
};