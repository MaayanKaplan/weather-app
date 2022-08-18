import axios from "axios";
import { ACUUWEATHER_BASE_URL } from "../Utils/constants";

const apiKey = "V65wReRKfZuHBuGg6qTLZE7Rhqhev4Om";

const autocompleteInstance = axios.create({
  baseURL: ACUUWEATHER_BASE_URL,
});

export const getAutoComplete = async (value: string) => {
  try {
    const response = await autocompleteInstance.get(
      `/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${value}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
