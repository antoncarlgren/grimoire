import { Text } from "react-native";
import { texts, globalStyles } from "../../../constants/styles/GlobalStyles";

const TextBody = ({ children, style }) => {
  return (
    <Text style={[texts.regular, globalStyles.bgTransparent, style]}>
      { children }
    </Text>
  );
}

export default TextBody;