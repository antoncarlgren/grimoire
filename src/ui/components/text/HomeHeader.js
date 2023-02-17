import { Text, StyleSheet } from "react-native";
import { fontSizes } from "../../../constants/Fonts";
import { colors } from "../../../constants/Colors";
import { texts, globalStyles } from "../../../constants/styles/GlobalStyles";

const HomeHeader = ({ children }) => {
  return (
    <Text style={ [texts.header, globalStyles.mh20, styles.homeHeader] }>
      { children }
    </Text>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    fontSize: fontSizes.xl * 2,
    color: colors.primaryRed,
    textAlign: 'center'
  }
});

export default HomeHeader;