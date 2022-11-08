import React from "react";
import { useNavigate } from "react-router-dom";

export const SelectData = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="buttons-wrapper">
        <button
          onClick={() => {
            navigate("/popular");
            return;
          }}
        >
          Popular Dishes
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Rick&Morty
        </button>
        <button
          onClick={() => {
            navigate("/samplelist");
          }}
        >
          Sample list
        </button>
      </div>
    </>
  );
};
