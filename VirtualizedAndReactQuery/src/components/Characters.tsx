import React, { memo, useState } from "react";

import { Result } from "../api/characters";

import Character from "./Character";
import { useCharacters } from "../hooks/useCharacters";

const Characters = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isPreviousData, status } = useCharacters(page);

  const mutatedData = React.useMemo(() => {
    return data;
  }, [data]);

  const cards = mutatedData?.results.map((character: Result) => {
    return <Character character={character} key={character.id} />;
  });

  if (status === "loading") {
    return <div className="loading">Loading...</div>;
  }

  if (status === "error") {
    return <div className="error">Error...</div>;
  }

  return (
    <>
      <h1>Rick and Morty</h1>
      <div className="content">
        {cards}
        <div>
          <button
            disabled={!isPreviousData && page === 1}
            onClick={() => setPage((old: number) => old - 1)}
          >
            Previous
          </button>
          <button
            disabled={!isPreviousData && mutatedData?.info.next === null}
            onClick={() => setPage((old: number) => old + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(Characters);
