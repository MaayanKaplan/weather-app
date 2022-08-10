import axios from "axios";
import { BASE_URL } from "../Utils/constants";

const apiKey = "V65wReRKfZuHBuGg6qTLZE7Rhqhev4Om";

const client = axios.create({
  baseURL: BASE_URL,
});

export const getAutoComplete = async (value: string) => {
  try {
    const response = await axios.get(
      BASE_URL + `/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${value}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
