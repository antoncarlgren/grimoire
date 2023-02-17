import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { globalStyles } from "../../constants/styles/GlobalStyles";
import ContentContainer from "../components/containers/ContentContainer";
import ItemCard from "../components/containers/ItemCard";
import LoadingAnimation from "../components/LoadingAnimation";
import { useDataSource } from "../../hooks/UseDataSource";
import { useSearch } from "../../hooks/UseSearch";
import { paths } from "../../constants/ApiConfig";
import NavigationSearchHeader from "../components/NavigationSearchHeader";
import { searchResultOptions } from "../../navigation/StackOptions";

const SearchResult = ({ route, navigation }) => {
    const { path, keys, placeholder } = route.params;

    const [items, loading, error] = useDataSource(paths.base, path);
    const [query, setQuery] = useState("");
    const filteredItems = useSearch(items, keys, query);

    useEffect(() => {
        navigation.setOptions({
            header: () => (
                <NavigationSearchHeader
                    placeholder={placeholder}
                    onChangeText={setQuery}
                    value={query}
                />
            ),
        });
    }, []);

    const renderItem = useCallback(
        ({ item, textStyle }) => (
            <ItemCard details={item} textStyle={textStyle} />
        ),
        []
    );

    return (
        <ContentContainer style={[styles.contentContainer]}>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <FlatList
                    style={[styles.results, globalStyles.ph10]}
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
