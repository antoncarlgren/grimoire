import { View, StyleSheet } from "react-native";
import { globalStyles } from "../../../constants/styles/GlobalStyles";

const ContentContainer = ({ children, style }) => {
    return (
        <View
            style={[
                styles.container,
                globalStyles.ph20,
                globalStyles.bgPrimary,
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});

export default ContentContainer;
