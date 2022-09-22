// import axios from "axios";
// import { abraGetFavorite } from "../api/AbraAPI";
import { abraInstance } from "./AbraAPI";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

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
  return response.data;
};

interface CityData {
  key: number;
  title: string;
  city: string;
  country: string;
}

export const useAddAndRemoveFavorites = () => {
  const queryClient = useQueryClient();

  const addToFavorites = async (
    key: number,
    title: string,
    city: string,
    country: string
  ) => {
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

  const { mutate, isSuccess } = useMutation(
    (data: CityData) => {
      return addToFavorites(data.key, data.title, data.city, data.country);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["favorites"], {
          refetchType: "all",
        });
      },
    }
  );
  return { mutate, isSuccess };
};
