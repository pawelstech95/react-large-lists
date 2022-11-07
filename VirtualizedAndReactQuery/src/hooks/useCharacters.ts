import {useQuery} from "react-query";

import {CharactersTs} from "../api/characters";

export const useCharacters = (page: number) => {
    // @ts-ignore
    const fetchCharactersPerPage: () => Promise<CharactersTs> = async ({ queryKey }) => {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
        );
        return response.json();
    };
    const queryResult = useQuery(
        ["characters", page],
        fetchCharactersPerPage,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
            staleTime: 300000
        }
    );
    return queryResult
};
