import { View, StyleSheet, StatusBar } from "react-native";
import { normalize } from "react-native-normalize";
import { colors } from "../../constants/Colors";
import { globalStyles } from "../../constants/styles/GlobalStyles";

const NavigationHeader = ({ children, style }) => {
  return (
    <View style={ [globalStyles.bgPrimary, styles.headerContainer, style] }>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: colors.primaryGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: StatusBar.currentHeight + normalize(10),
  }
});

export default NavigationHeader;