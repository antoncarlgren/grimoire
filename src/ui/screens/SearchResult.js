import { useCallback, useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { globalStyles } from "../../constants/styles/GlobalStyles";
import ContentContainer from "../components/containers/ContentContainer";
import ItemCard from "../components/containers/ItemCard";
import LoadingAnimation from "../components/LoadingAnimation";
import { useDataInitializer } from "../../hooks/useDataInitializer";
import { useSearch } from "../../hooks/useSearch";
import { useStorage } from "../../hooks/useStorage";
import NavigationHeader from "../components/NavigationHeader";

const SearchResult = ({ route, navigation }) => {
    const { path, cardColors, keys } = route.params;
    const [loading, error] = useDataInitializer(path);
    const [query, setQuery] = useState("");
    const filteredItems = useSearch(items, keys, query);

    useEffect(() => {
        navigation.setOptions({
            header: () =>
                !loading && (
                    <NavigationHeader
                        search={true}
                        back={true}
                        onChangeText={setQuery}
                    />
                ),
        });
    }, [loading]);

    const renderItem = ({ item }) => {
        return (
            <ItemCard slug={item.slug} title={item.name} colors={cardColors} />
        );
    };

    return (
        <ContentContainer style={[styles.contentContainer]}>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <FlatList
                    style={[styles.results, globalStyles.ph10]}
                    data={filteredItems}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            )}
        </ContentContainer>
    );
};

const keyExtractor = (item) => item.slug;

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 0,
    },
    results: {
        width: "100%",
    },
});

export default SearchResult;
