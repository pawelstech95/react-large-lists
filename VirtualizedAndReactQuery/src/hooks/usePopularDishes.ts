import { useQuery } from "react-query";

import { RecipeData } from "../api/recipes";

export const usePopularDishes = () => {
  const queryKey = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`;

  const fetchPopularDishes: () => Promise<RecipeData> = async () => {
    const response = await fetch(queryKey);
    return response.json();
  };

  return useQuery(queryKey, fetchPopularDishes, {
    refetchOnWindowFocus: false,
    staleTime: 300000,
    cacheTime: 1000 * 60 * 60,
  });
};
