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
      return response.data;
    } catch (error) {
      console.log(error);
    }
  return undefined;
};

export const getGeoPosition = async (latitude: number, longitude: number) => {
  if (!latitude || !longitude) return;
  try {
    const response = await accuweatherInstance.get(
      `/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude}%2C${longitude}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTodaysForecast = async (locationKey: number) => {
  if (!locationKey) return;
  try {
    const response = await accuweatherInstance.get(
      `/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFiveDaysForecast = async (locationKey: number) => {
  if (!locationKey) return;
  try {
    const response = await accuweatherInstance.get(
      `/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const get12HoursForecast = async (locationKey: number) => {
  if (!locationKey) return;
  try {
    const response = await accuweatherInstance.get(
      `/forecasts/v1/hourly/12hour/${locationKey}`,
      {
        params: {
          apikey: apiKey,
          details: true,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async (favKey: number) => {
  if (!favKey) return;
  try {
    const response = await accuweatherInstance.get(`/locations/v1/${favKey}`, {
      params: {
        apikey: apiKey,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
