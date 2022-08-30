import axios from "axios";
import { ACUUWEATHER_BASE_URL, apiKey } from "../../Utils/constants";

export interface Option {
  value: string;
  label: string;
}

const accuweatherInstance = axios.create({
  baseURL: ACUUWEATHER_BASE_URL,
});

export const getSearchAutoComplete = async (value: string) => {
  if (value.length > 0)
    try {
      const response = await accuweatherInstance.get(
        `/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${value}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  return undefined;
};
