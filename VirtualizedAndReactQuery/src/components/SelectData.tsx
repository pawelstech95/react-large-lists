import React, {useState} from 'react';

import Characters from "./Characters";
import PopularDishes from "./PopularDishes";

export const SelectData = () => {
    const [paginationView, setPaginationView] = useState<boolean>(false);

    return (
        <>
            {paginationView ? <h1>Rick and Morty</h1> : <h1>Popular dishes</h1>}
            <div>
                <button
                    onClick={() => {
                        setPaginationView(false);
                    }}
                >
                    React Virtualized - Popular Dishes
                </button>
                <button
                    onClick={() => {
                        setPaginationView(true);
                    }}
                >
                    Pagination with ReactQuery - Rick&Morty
                </button>
            </div>
            {paginationView ? <Characters /> : <PopularDishes/>}
        </>
    )
}
