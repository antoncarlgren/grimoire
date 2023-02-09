import { paths, queryParameters } from "../constants/ApiConfig";
import axios from "axios";
import { formatSpellSchoolStrings } from "../utils/SpellUtils";

const instance = axios.create({
  baseURL: paths.base,
  timeout: 1500,
});

const getSpells = async (url, combinedResults) => {
  const response = await axios.get(url);
  combinedResults = [...combinedResults, ...response.data.results];
  
  if(response.data.next !== null) {
    return await getSpells(response.data.next, combinedResults);
  }

  return combinedResults;
}

// TODO: Implement proper error handling
// TODO: Implement filtering and sorting by query params
export const getAllSpells = async (query) => {
  const url = query.search 
    ? paths.base + paths.spells + queryParameters.search + query.search
    : paths.base + paths.spells;

  try {
    const combinedResults = await getSpells(url, []);
    const formattedResults = formatSpellSchoolStrings(combinedResults);
    return formattedResults;
  } catch (error) {
    console.log(error);
  } 
}

export const getSpellsByPage = async (query, pageNumber) => {
  try {
    const queryParameter = '?page=' + pageNumber;
    const response = await instance.get(paths.spells + queryParameter);
    const formattedResults = formatSpellSchoolStrings(response.data.results);
    return formattedResults; 
  } catch (error) {
    console.log(error);
  }
}