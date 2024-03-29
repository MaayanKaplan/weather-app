import { abraInstance } from "./AbraAPI";
import {
  UseMutateFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";

interface Results {
  count: number;
  next: number | null;
  previous: number | null;
  results: any[];
}

export const getFavorites = async (url: string): Promise<Results> => {
  const token = localStorage.getItem("token");

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token as string)}`,
    },
  });
  return response.data;
};

interface CityData {
  key: number;
  title?: string;
  city?: string;
  country?: string;
}

export const useAddAndRemoveFavorites = () => {
  const queryClient = useQueryClient();

  const addToFavorites = async (
    key: number,
    title?: string,
    city?: string,
    country?: string
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
