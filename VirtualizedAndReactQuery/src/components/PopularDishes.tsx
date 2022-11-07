import React from "react";
import {List} from "react-virtualized";

import {usePopularDishes} from "../hooks/usePopularDishes";
import Popular from "./Popular";

const PopularDishes = () => {
    const {data, status} = usePopularDishes()
    const popular = data?.recipes.map((recipe, index) => {
        return  <Popular recipe={recipe} key={recipe.id} index={index} />
    })

    if (status  === "loading") {
        return <div>Loading...</div>;
    }
    if (status === "error") {
        return <div>Error...</div>;
    }

    return(
        <>{data &&
             // @ts-ignore
            <List
                width={window.innerWidth} // @todo rewrite it
                height={window.innerHeight} // @todo rewrite it
                rowRenderer={() => popular}
                rowCount={data.recipes.length}
                rowHeight={400} //??
                containerStyle={{
                    overflowY: "auto",
                }}
            />
        }
        </>
    )
};

export default PopularDishes;