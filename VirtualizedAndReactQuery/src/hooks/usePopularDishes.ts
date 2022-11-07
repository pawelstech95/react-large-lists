import {useQuery} from "react-query";

import { RecipeData} from "../api/recipes";

export const usePopularDishes = () => {
    const queryKey = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`;

    // @ts-ignore
    const fetchPopularDishes: () => Promise<RecipeData> = async ( ) => {
        const response = await fetch(queryKey);
        return response.json();
    };

    const queryResult = useQuery(
        queryKey,
        fetchPopularDishes,{
            refetchOnWindowFocus: false,
            staleTime: 300000
        }
    );
    return queryResult
};
