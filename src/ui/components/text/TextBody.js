import { Text } from "react-native";
import { texts, globalStyles } from "../../../constants/styles/GlobalStyles";

const TextBody = ({ children }) => {
  return (
    <Text style={[texts.regular, globalStyles.bgTransparent]}>
      { children }
    </Text>
  );
}

export default TextBody;