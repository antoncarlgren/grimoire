import { StyleSheet, TextInput, View } from "react-native";
import { globalStyles, texts } from "../../../constants/styles/GlobalStyles";
import { colors } from "../../../constants/Colors";

const SearchField = ({ placeholder }) => {
  return(
    <View style={[globalStyles.mv20, styles.wrapper]}>
      <TextInput 
        style={[texts.regular, globalStyles.rounded, globalStyles.bgTertiary, styles.searchField]}
        placeholder={placeholder}
        autoCapitalize='words'
        selectionColor={colors.primaryText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
  },
  searchField: {
    alignSelf: 'stretch', 
    paddingVertical: 10,
    paddingHorizontal: 15
  }
});

export default SearchField;