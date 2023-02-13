import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { getItemsFromApi } from "../../api/ApiClient";

export const useApiClient = (url) => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const 


  const getItems = async (url, combinedResults) => {
    const response = await axios.get(url);
    combinedResults = [...combinedResults, ...response.data.results];
    if(response.data.next !== null) {
      return await getItems(response.data.next, combinedResults);
    }
    setLoading(false);
    return combinedResults;
  }

  useEffect(() => {
    const getItemsFromApi = async () => {
      setApiData(await getItems(url, []));
    }

    getItemsFromApi();
  }, [url]);

  return [apiData, loading, error];
}