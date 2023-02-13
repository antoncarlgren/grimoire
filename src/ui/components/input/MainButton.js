import { StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../constants/styles/GlobalStyles";
import { colors } from "../../../constants/Colors";
import { fontSizes } from "../../../constants/Fonts";
import TextBody from "../text/TextBody";
import { normalize } from "react-native-normalize";

const MainButton = ({ onPress, title, style, titleStyle }) => {
  return(
    <TouchableOpacity
      onPress={ onPress }
      activeOpacity={ 0.75 }
      style={ [globalStyles.pv10, globalStyles.roundedLarge, globalStyles.bgSecondary, styles.button, style] }>
      <TextBody style={ [styles.titleStyle, titleStyle] }>
        { title }
      </TextBody>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: colors.primaryGrey,
    marginTop: normalize(20),
    alignItems: 'center'
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: fontSizes.l,
    color: colors.primaryBlue,
  }
});

export default MainButton;