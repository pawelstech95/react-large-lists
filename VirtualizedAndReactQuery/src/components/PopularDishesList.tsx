import React, { FC } from "react";
import {
  AutoSizer as _AutoSizer,
  AutoSizerProps,
  List as _List,
  ListProps,
} from "react-virtualized";

import { RecipeData } from "../api/recipes";

import Popular from "./Popular";

const List = _List as unknown as FC<ListProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

interface Props {
  data: RecipeData;
}

export const PopularDishesList = ({ data }: Props) => {
  return (
    <>
      <h1>Popular dishes</h1>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowRenderer={({ index, key, style }) => (
              <Popular
                recipe={data.recipes[index]}
                index={index}
                arrayLength={data.recipes.length}
                key={key}
                style={style}
              />
            )}
            rowCount={data.recipes.length}
            rowHeight={250}
          />
        )}
      </AutoSizer>
    </>
  );
};
