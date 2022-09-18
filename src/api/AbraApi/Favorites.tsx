// import axios from "axios";
// import { abraGetFavorite } from "../api/AbraAPI";
import { abraInstance } from "./AbraAPI";

interface Results {
  count: number;
  next: number | null;
  previous: number | null;
  results: any[];
}

export const getFavorites = async (): Promise<Results> => {
  const token = localStorage.getItem("token");

  const response = await abraInstance.get("api/favorites/", {
    headers: {
      Authorization: `Bearer ${JSON.parse(token as string)}`,
    },
  });
  // console.log(response.data);
  return response.data;
};

export const addToFavorites = async (key: number, title: string) => {
  const token = localStorage.getItem("token");

  if (token) {
    const response = await abraInstance.post(
      "api/favorites/",
      { key, title },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(token as string)}`,
        },
      }
    );
    return response;
  }
  return null;
};
