import React, { useState } from "react";

import { Result } from "../api/characters";

import Character from "./Character";
import {useCharacters} from "../hooks/useCharacters";

const Characters = () => {
  const [page, setPage] = useState<number>(1);

  const {data, isPreviousData, status} = useCharacters(page)

  const cards = data?.results.map((character: Result) => {
    return <Character character={character} key={character.id} /> ;
  })



  if (status  === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error...</div>;
  }

  return (
    <div className="content">
      {cards}
          <div >
            <button
              disabled={!isPreviousData && page === 1}
              onClick={() => setPage((old: number) => old - 1)}
            >
              Previous
            </button>
            <button
              disabled={!isPreviousData && data?.info.next === null}
              onClick={() => setPage((old: number) => old + 1)}
            >
              Next
            </button>
          </div>
    </div>
  );
};

export default Characters;
