import { Text } from "react-native";
import { texts, globalStyles } from "../../../constants/styles/GlobalStyles";

const TextBody = ({ children, style, shrink }) => {
    return (
        <Text
            adjustsFontSizeToFit={shrink}
            numberOfLines={shrink ? 1 : null}
            style={[texts.regular, globalStyles.bgTransparent, style]}
        >
            {children}
        </Text>
    );
};

export default TextBody;
