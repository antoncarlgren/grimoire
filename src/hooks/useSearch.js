import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "./useDebounce";

export const useSearch = (source, searchKeys, query, delay = 250) => {
    const [searchPairs, setSearchPairs] = useState({});
    const debouncedQuery = useDebounce(query, delay);

    // Parse the provided query string into pairs to be matched against the source
    useEffect(() => {
        const parsedPairs = {};
        const pairs = query.split(",");

        pairs.forEach((pair) => {
            const [key, value] = pair.split(":");
            const matchingSearchKey = searchKeys.find((searchKey) => {
                return Object.values(searchKey).some((searchKeyValue) => {
                    return (
                        key.trim().toLowerCase() ===
                        searchKeyValue.toLowerCase()
                    );
                });
            });

            if (matchingSearchKey && value) {
                parsedPairs[matchingSearchKey.target] = value.trim();
            }
        });

        // If no keys are present in the query and it isn't empty, assume the user wants to search by name
        if (Object.keys(parsedPairs).length === 0 && query !== "") {
            parsedPairs["name"] = query.trim();
        }
        setSearchPairs(parsedPairs);
    }, [debouncedQuery]);

    const filteredSource = useMemo(() => {
        if (Object.values(searchPairs).every((value) => value === "")) {
            return source;
        }

        const filteredItems = source.filter((item) => {
            return Object.keys(searchPairs).every((key) => {
                return (
                    item[key] != null &&
                    item[key]
                        .toString()
                        .toLowerCase()
                        .includes(searchPairs[key].toLowerCase())
                );
            });
        });

        return filteredItems;
    }, [source, searchPairs]);

    return filteredSource;
};
