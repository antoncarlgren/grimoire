import axios from "axios";
import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export const useDataSource = (root, path) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const { getItem, setItem } = useAsyncStorage(path);

    const getItemFromApi = async (url, loadedData) => {
        try {
            const response = await axios.get(url);
            loadedData = [...loadedData, ...response.data.results];
            if (response.data.next == null) {
                const json = JSON.stringify(loadedData);
                await setItem(json);

                setData([...loadedData]);
                setLoading(false);

                return;
            }

            await getItemFromApi(response.data.next, loadedData);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const getItemFromLocalStorage = async () => {
        try {
            const localJson = await getItem();
            if (localJson != null) {
                const data = JSON.parse(localJson);
                setData(data);
                setLoading(false);

                return true;
            }

            return false;
        } catch (error) {
            setLoading(false);
            setError(error);

            return false;
        }
    };

    useEffect(() => {
        const loadData = async () => {
            const loadedLocalItem = await getItemFromLocalStorage();
            if (!loadedLocalItem) {
                await getItemFromApi(root + path, []);
            }
        };

        loadData();
    }, [root, path]);

    return [data, loading, error];
};
