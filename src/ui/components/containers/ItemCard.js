import { useState, memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../constants/styles/GlobalStyles";
import TextBody from "../text/TextBody";

const ItemCard = ({ details, colors }) => {
    const [pressed, setPressed] = useState(false);
    // Get text color by matching the value of the key property with the property of the same name of the details object
    const colorKey = details[colors["key"]]?.toLowerCase();
    const textColor = colors["highlighting"][colorKey];

    const setPressedStyle = () => {
        setPressed(!pressed);
        return pressed ? null : styles.card;
    };

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[
                styles.card,
                globalStyles.mv10,
                globalStyles.p10,
                globalStyles.bgSecondary,
            ]}
        >
            <TextBody style={[textColor]} onPress={() => setPressedStyle()}>
                {details.name}
            </TextBody>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        borderRadius: 6,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default memo(ItemCard);
