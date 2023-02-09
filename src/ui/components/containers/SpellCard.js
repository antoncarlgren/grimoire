
import { View, StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { globalStyles, schoolTextColors } from "../../../constants/styles/GlobalStyles";
import TextBody from "../text/TextBody";

const SpellCard = ({ details }) => {
  
  return(
    <View style={[styles.card, globalStyles.mv10, globalStyles.p10, globalStyles.bgSecondary]}>
      <TextBody style={[schoolTextColors[details.school]]}>
        { details.name }
      </TextBody>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpellCard;