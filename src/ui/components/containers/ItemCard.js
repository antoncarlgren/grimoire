import { View, StyleSheet } from "react-native";
import { globalStyles } from "../../../constants/styles/GlobalStyles";
import TextBody from "../text/TextBody";

const ItemCard = ({ details, colors }) => {
    const [pressed, setPressed] = useState(false);
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
                {details.name}
            </TextBody>
            <TextBody
                shrink={false}
                style={[
                    texts.regular,
                    globalStyles.p20,
                    !pressed ? { display: "none" } : null,
                ]}
            >
                {details.desc}
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

export default memo(ItemCard);
