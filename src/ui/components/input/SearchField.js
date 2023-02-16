import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { globalStyles, texts } from "../../../constants/styles/GlobalStyles";
import { colors } from "../../../constants/Colors";
import { normalize } from "react-native-normalize";

const SearchField = ({ value, placeholder, onChangeText, onSubmitEditing, style }) => {
  const[text, setText] = useState(value);

  return(
    <>
      <TextInput 
        style={ [texts.regular, globalStyles.pv10, globalStyles.mh10, globalStyles.roundedLarge, globalStyles.bgTertiary, styles.searchField, style] }
        value={ text }
        placeholder={ placeholder }
        selectionColor={ colors.primaryText }
        onChangeText={ onChangeText }
        onSubmitEditing={ onSubmitEditing }/>
    </>
  );
}

const styles = StyleSheet.create({
  searchField: {
    marginBottom: normalize(10),
    flex: 1,
    textAlign: 'center',
  }
});

export default SearchField;