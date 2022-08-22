// import axios from "axios";
// import { abraGetFavorite } from "../api/AbraAPI";
import { abraInstance } from "../api/AbraAPI";

export const getFavorites = async () => {
  const token = localStorage.getItem("token");
  // console.log(token);

  try {
    const response = await abraInstance.get("api/favorites/", {
      headers: {
        Authorization: `Bearer ${JSON.parse(token as string)}`,
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// export const getFavorites = () => {
//   const token = localStorage.getItem("token") as string;
//   // console.log(token);

//   const response = abraGetFavorite(token);
//   console.log(response);

//   // return abraGetFavorite(token);
// };
