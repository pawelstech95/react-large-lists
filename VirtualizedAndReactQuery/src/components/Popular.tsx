import React from "react";

import {Recipe} from "../api/recipes";

interface Props {
    recipe: Recipe;
    index: number
}

const Popular = ({ recipe, index }: Props) => {
    return (
        <div className="card">
         <img src={recipe.image} alt={recipe.title} />
            <div className="text-container">
                <h3>{recipe.title}</h3>
                <p className="cuisines">
                    {recipe.cuisines}
                </p>
                <p className="title">{recipe.title}</p>
                <p>{recipe.diets}</p>
                <p>{index}</p>
            </div>
        </div>
    );
};

export default Popular;
