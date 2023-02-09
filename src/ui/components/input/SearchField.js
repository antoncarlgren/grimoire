import { StyleSheet, TextInput, View } from "react-native";
import { globalStyles, texts } from "../../../constants/styles/GlobalStyles";
import { colors } from "../../../constants/Colors";
import normalize from "react-native-normalize";
import { Feather } from "@expo/vector-icons";

const SearchField = ({ value, placeholder, onChangeText, onSubmitEditing }) => {

  return(
    <View style={[globalStyles.mv20, styles.wrapper]}>
      <TextInput 
        style={[texts.regular, globalStyles.pv10, globalStyles.roundedLarge, globalStyles.bgTertiary, styles.searchField]}
        value={value}
        placeholder={placeholder}
        autoCapitalize='words'
        selectionColor={colors.primaryText}
        onChangeText={onChangeText}
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
    paddingHorizontal: normalize(15)
  }
});

export default SearchField;