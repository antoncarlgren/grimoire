import axios from "axios";
import HttpRequestError from "../api/HttpRequestError";
import { useEffect, useState } from "react";
import { useStorage } from "./useStorage";
import { paths } from "../constants/ApiConfig";

export const useDataInitializer = (baseUrl, path, timeout = 3000) => {
    const storage = useStorage();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const client = axios.create({
        timeout: timeout,
    });

    const getAllItemsFromApi = async (url, loadedItems = [], pageIndex = 0) => {
        try {
            const response = await client.get(url);

            if (response.status !== 200) {
                throw new HttpRequestError(
                    response.status,
                    response.statusText
                );
            }

            const indexedItems = formatPageItems(
                response.data.results,
                pageIndex
            );

            loadedItems = [...loadedItems, ...indexedItems];

            if (response.data.next == null) {
                await storage.setArrayAsync();
                setLoading(false);
                return;
            }

            await getAllItemsFromApi(
                response.data.next,
                loadedItems,
                pageIndex + 1
            );
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const formatPageItems = (results, pageIndex) => {
        const indexedItems = results.map((item) => {
            return {
                index: pageIndex,
                ...item,
            };
        });

        return indexedItems;
    };

    useEffect(() => {
        const initializeData = async () => {
            const items =
                (await storage.getArrayAsync(path)) ??
                (await getAllItemsFromApi(baseUrl + path));

            setData[items];
        };

        initializeData();
    }, []);

    return [data, loading, error];
};
