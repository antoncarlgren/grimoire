import { StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles, texts } from "../../../constants/styles/GlobalStyles";
import TextBody from "../text/TextBody";
import { useNavigation } from "@react-navigation/core";

const ItemCard = ({ slug, title, colors }) => {
    const navigation = useNavigation();

    // Get text color by matching the value of the key property with the property of the same name of the details object
    const colorKey = details[colors["key"]]?.toLowerCase().replace(" ", "");
    const textColor = colors["highlighting"][colorKey];

    return (
        <TouchableOpacity
            onPress={() => setPressed(!pressed)}
            activeOpacity={0.5}
            style={[
                styles.card,
                globalStyles.p10,
                globalStyles.mv10,
                globalStyles.bgSecondary,
            ]}
        >
            <TextBody shrink={true} style={[texts.card, textColor]}>
                {title}
            </TextBody>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        borderRadius: 6,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ItemCard;
