import { paths } from "../constants/ApiConfig";
import axios from "axios";
import { formatSpellSchoolStrings } from "../utils/SpellUtils";

const instance = axios.create({
  baseURL: paths.base,
  timeout: 1500,
});

const getItems = async (url, combinedResults) => {
  const response = await axios.get(url);
  combinedResults = [...combinedResults, ...response.data.results];
  
  if(response.data.next !== null) {
    return await getItems(response.data.next, combinedResults);
  }

  return combinedResults;
}

// TODO: Implement proper error handling
export const getItemsFromApi = async (path) => {
  const url = paths.base + path;
  try {
    const combinedResults = await getItems(url, []);
    return combinedResults;
  } catch (error) {
    console.log(error);
  } 
}