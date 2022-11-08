import { useQuery } from "react-query";

import { CharactersTs } from "../api/characters";

export const useCharacters = (page: number) => {
  const fetchCharacters: ({
    queryKey,
  }: {
    queryKey: any;
  }) => Promise<CharactersTs> = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  return useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });
};
