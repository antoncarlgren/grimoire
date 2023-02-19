import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { globalStyles } from "../../constants/styles/GlobalStyles";
import ContentContainer from "../components/containers/ContentContainer";
import ItemCard from "../components/containers/ItemCard";
import LoadingAnimation from "../components/LoadingAnimation";
import { useDataSource } from "../../hooks/useDataSource";
import { useSearch } from "../../hooks/useSearch";
import { paths } from "../../constants/ApiConfig";
import NavigationHeader from "../components/NavigationHeader";

const SearchResult = ({ route, navigation }) => {
    const { path, placeholder, cardColors, keys } = route.params;
    const [items, loading, error] = useDataSource(paths.base, path);
    const [query, setQuery] = useState("");
    const filteredItems = useSearch(items, keys, query);

    useEffect(() => {
        navigation.setOptions({
            header: () => (
                <NavigationHeader
                    search={true}
                    back={true}
                    placeholder={placeholder}
                    onChangeText={setQuery}
                    value={query}
                />
            ),
        });
    }, []);

    const renderItem = ({ item }) => {
        return <ItemCard details={item} colors={cardColors} />;
    };

    return (
        <ContentContainer style={[styles.contentContainer]}>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <FlatList
                    style={[styles.results, globalStyles.ph10]}
                    maxToRenderPerBatch={25}
                    windowSize={41}
                    data={filteredItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.slug}
                />
            )}
        </ContentContainer>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 0,
    },
    results: {
        width: "100%",
    },
});

export default SearchResult;
