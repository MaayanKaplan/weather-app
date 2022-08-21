import React from "react";
import { abraGetFavorite } from "../api/AbraAPI";
import { abraInstance } from "../api/AbraAPI";

// const useFavorites = async () => {
//   const token = JSON.stringify(localStorage.getItem("token"));
//   console.log(token);

//   try {
//     const res = await abraInstance.get("api/favorites/", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res;
//   } catch (err) {
//     console.log(err);
//   }
// };

const useFavorites = () => {
  const token = JSON.stringify(localStorage.getItem("token"));
  return abraGetFavorite(token);
};

export default useFavorites;
