import { StyleSheet } from "react-native";
import { useRef, useState } from "react";
import { globalStyles, texts } from "../../../constants/styles/GlobalStyles";
import { Searchbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { useDebounceEffect } from "../../../hooks/useDebounceEffect";
import { colors } from "../../../constants/Colors";

const SearchField = ({ placeholder, onChangeText, style, value }) => {
    const navigation = useNavigation();

    return (
        <Searchbar
            style={[globalStyles.bgPrimary, styles.container]}
            inputStyle={[
                texts.searchField,
                globalStyles.p10,
                globalStyles.bgPrimary,
                styles.searchField,
                style,
            ]}
            placeholder={placeholder}
            placeholderTextColor={colors.primaryText}
            icon="chevron-left"
            iconColor={colors.primaryText}
            onIconPress={() => navigation.goBack()}
            onChangeText={onChangeText}
            value={value}
        />
    );
};

const styles = StyleSheet.create({
    searchField: {
        flex: 1,
        textAlign: "center",
    },
    container: {
        flex: 1,
    },
});

export default SearchField;
