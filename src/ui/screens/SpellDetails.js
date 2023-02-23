import { StyleSheet } from "react-native";
import TextBody from "../text/TextBody";
import DetailsHeader from "../components/text/DetailsHeader";
import { formatSchoolAndLevel } from "../../utils/SpellUtils";
import LoadingAnimation from "../components/LoadingAnimation";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useState } from "react";

const SpellDetails = ({ slug, headerColor }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const { getItem, setItem } = useAsyncStorage(slug);
    const levelAndSchool = formatSchoolAndLevel(data.level, details.school);

    useEffect(() => {
        const loadData = async () => {
            try {
                const json = await getItem(slug);
                if (json != null) {
                    const data = JSON.parse(json);
                    setData(data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <ContentContainer style={[styles.contentContainer]}>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <>
                    <DetailsHeader colorStyle={headerColor}>
                        {data.name}
                    </DetailsHeader>
                    <TextBody>{levelAndSchool}</TextBody>
                    <TextBody>{data.range}</TextBody>
                    <TextBody>{data.components}</TextBody>
                    <TextBody>{data.range}</TextBody>
                    <TextBody>{data.desc}</TextBody>
                </>
            )}
        </ContentContainer>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        borderRadius: 6,

        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        paddingHorizontal: 0,
    },
});

export default SpellDetails;
