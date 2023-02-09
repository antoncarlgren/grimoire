import { ActivityIndicator, View, StyleSheet } from "react-native"
import { textSizes } from "../../constants/Fonts";
import { colors } from "../../constants/Colors";
import TextBody from "./text/TextBody";

const LoadingAnimation = () => {
  return(
    <View style={[styles.container]}>
      <ActivityIndicator 
        size='large'
        style={[styles.indicator]}
        color={colors.primaryRed}/>
      <TextBody style={[styles.text]}>
        Browsing Grimoire...
      </TextBody>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  indicator: {
    marginBottom: 30,
  },
  text: {
    fontSize: textSizes.l,
    color: colors.primaryText
  }
});

export default LoadingAnimation;