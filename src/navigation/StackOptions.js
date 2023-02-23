import { colors } from "../constants/Colors";
import { fonts } from "../constants/Fonts";
import { globalStyles } from "../constants/styles/GlobalStyles";
import SearchField from "../ui/components/input/SearchField";
import NavigationHeader from "../ui/components/NavigationHeader";

export const defaultOptions = {
    headerShown: true,
    headerTintColor: colors.primaryRed,
    headerTitleStyle: {
        paddingHorizontal: 10,
        backgroundColor: colors.primaryBackground,
    },
    header: () => <NavigationHeader search={false} back={false} />,
};

export const searchResultOptions = {
    headerShown: true,
    headerTintColor: colors.primaryRed,
    headerTitleStyle: {
        paddingHorizontal: 10,
        backgroundColor: colors.primaryBackground,
    },
    header: () => <NavigationHeader search={true} back={true} />,
};
