import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/Colors";
import { Appbar } from "react-native-paper";
import { globalStyles } from "../../constants/styles/GlobalStyles";
import SearchField from "./input/SearchField";
import { useNavigation } from "@react-navigation/core";
import { fontSizes } from "../../constants/Fonts";
import { useRef } from "react";

const NavigationHeader = ({ search, placeholder, onChangeText }) => {
    const navigation = useNavigation();

    return (
        <Appbar.Header style={[globalStyles.bgPrimary, styles.headerContainer]}>
            {search && (
                <Appbar.Content
                    title={
                        <SearchField
                            style={[globalStyles.mh10]}
                            placeholder={placeholder ?? "Search Grimoire"}
                            onChangeText={onChangeText}
                        />
                    }
                />
            )}
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default NavigationHeader;
