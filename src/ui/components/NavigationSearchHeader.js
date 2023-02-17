import { View, StyleSheet, StatusBar } from "react-native";
import { normalize } from "react-native-normalize";
import { colors } from "../../constants/Colors";
import { globalStyles } from "../../constants/styles/GlobalStyles";
import SearchField from "./input/SearchField";

const NavigationSearchHeader = ({
    style,
    placeholder,
    onChangeText,
    value,
}) => {
    return (
        <View style={[globalStyles.bgPrimary, styles.headerContainer, style]}>
            <SearchField
                style={[globalStyles.mh10]}
                placeholder={placeholder ?? "Refine your search"}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: colors.primaryGrey,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingTop: StatusBar.currentHeight + normalize(10),
    },
});

export default NavigationSearchHeader;
