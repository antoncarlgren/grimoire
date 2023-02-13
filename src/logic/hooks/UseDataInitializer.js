import { useState, useEffect } from "react";
import { useApiClient } from "./UseApiClient";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { paths } from "../../constants/ApiConfig";

export const useDataInitializer = (path) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [apiData, error] = useApiClient(paths.base + path);
  const { getItem } = useAsyncStorage(path);

  useEffect(() => {
    setData(apiData);
    setLoading(false);
  }, []);

    return [data, loading, error];
}