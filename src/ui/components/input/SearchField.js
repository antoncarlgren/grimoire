import { StyleSheet, TextInput, View } from "react-native";
import { globalStyles, texts } from "../../../constants/styles/GlobalStyles";
import { colors } from "../../../constants/Colors";
import { Feather } from "@expo/vector-icons";

const SearchField = ({ placeholder, onSubmitEditing }) => {

  return(
    <View style={[globalStyles.mv20, styles.wrapper]}>
      <TextInput 
        style={[texts.regular, globalStyles.pv10, globalStyles.roundedLarge, globalStyles.bgTertiary, styles.searchField]}
        placeholder={placeholder}
        autoCapitalize='words'
        selectionColor={colors.primaryText}
        onSubmitEditing={onSubmitEditing}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
  },
  searchField: {
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingHorizontal: 15
  }
});

export default SearchField;