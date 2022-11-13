import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const SelectData = () => {
  const navigate = useNavigate();

  const handleClickToPopular = useCallback(
    () => navigate("/popular"),
    [navigate]
  );
  const handleClickToRickAndMorty = useCallback(
    () => navigate("/"),
    [navigate]
  );
  const handleClickToSampleList = useCallback(
    () => navigate("/samplelist"),
    [navigate]
  );

  return (
    <>
      <div className="buttons-wrapper">
        <button onClick={handleClickToPopular}>Popular Dishes</button>
        <button onClick={handleClickToRickAndMorty}>Rick&Morty</button>
        <button onClick={handleClickToSampleList}>Sample list</button>
      </div>
    </>
  );
};
