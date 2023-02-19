import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { globalStyles, texts } from "../../../constants/styles/GlobalStyles";
import { colors } from "../../../constants/Colors";
import { normalize } from "react-native-normalize";

const SearchField = ({ placeholder, onChangeText, onSubmitEditing, style }) => {
    return (
        <>
            <TextInput
                style={[
                    texts.searchField,
                    globalStyles.p10,
                    globalStyles.mh10,
                    globalStyles.roundedLarge,
                    globalStyles.bgPrimary,
                    styles.searchField,
                    style,
                ]}
                placeholder={placeholder}
                selectionColor={colors.primaryText}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
            />
        </>
    );
};

const styles = StyleSheet.create({
    searchField: {
        flex: 1,
        textAlign: "center",
    },
});

export default SearchField;
