import React, { CSSProperties } from "react";

import { Recipe } from "../api/recipes";

interface Props {
  recipe: Recipe;
  index: number;
  arrayLength: number;
  style: CSSProperties;
}

const Popular = ({ recipe, arrayLength, index, style }: Props) => {
  return (
    <>
      <div className="card card-virtualized" style={style}>
        <img src={recipe.image} alt={recipe.title} />
        <div className="text-container">
          <h3>{recipe.title}</h3>
          <p className="ready-in-minutes">
            Ready in minutes: {recipe.readyInMinutes}
          </p>
          <p className="cheap">Cheap: {recipe.cheap ? "Yes" : "No"}</p>
          <p className="cuisines">
            Cuisine: <b>{recipe.cuisines}</b>
          </p>
          <p>Vegetarian: {recipe.vegetarian ? "Yes" : "No"}</p>
          <p>
            Rendered item: <b>{index + 1}</b>
          </p>
          <p>
            All items: <b>{arrayLength}</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Popular;
