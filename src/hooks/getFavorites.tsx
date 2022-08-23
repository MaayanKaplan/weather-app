// import axios from "axios";
// import { abraGetFavorite } from "../api/AbraAPI";
import { abraInstance } from "../api/AbraAPI";

interface Results {
  count: number;
  next: number | null;
  previous: number | null;
  results: any[];
}

export const getFavorites = async (): Promise<Results> => {
  const token = localStorage.getItem("token");
  // console.log(token);

  const response = await abraInstance.get("api/favorites/", {
    headers: {
      Authorization: `Bearer ${JSON.parse(token as string)}`,
    },
  });
  // console.log(response.data);
  return response.data;
};

// export const getFavorites = () => {
//   const token = localStorage.getItem("token") as string;
//   // console.log(token);

//   const response = abraGetFavorite(token);
//   console.log(response);

//   // return abraGetFavorite(token);
// };
