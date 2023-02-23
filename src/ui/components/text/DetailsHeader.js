import { Text, StyleSheet } from "react-native";
import { fontSizes } from "../../../constants/Fonts";
import { colors } from "../../../constants/Colors";
import { texts, globalStyles } from "../../../constants/styles/GlobalStyles";

const DetailsHeader = ({ children, colorStyle }) => {
    return (
        <Text
            style={[
                texts.header,
                globalStyles.mh20,
                styles.homeHeader,
                colorStyle,
            ]}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    homeHeader: {
        fontSize: fontSizes.xl,
        textAlign: "center",
    },
});

export default DetailsHeader;
