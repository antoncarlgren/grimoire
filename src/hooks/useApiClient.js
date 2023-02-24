import axios from "axios";
import { useEffect } from "react";

export const useApiClient = (url) => {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadItem = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        let active = true;
        loadItem();
        return () => {
            active = false;
        };
    }, [url]);

    return [data, loading, error];
};
