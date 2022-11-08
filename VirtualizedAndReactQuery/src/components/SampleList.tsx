import React, { FC } from "react";
import { faker } from "@faker-js/faker";
import {
  AutoSizer as _AutoSizer,
  AutoSizerProps,
  List as _List,
  ListProps,
} from "react-virtualized";

const List = _List as unknown as FC<ListProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

export const SampleList = () => {
  const data = React.useMemo(
    () =>
      new Array(10000).fill({}).map((value, id) => ({
        id: id,
        title: faker.lorem.words(5),
        body: faker.lorem.sentences(8),
      })),
    []
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h1>Sample List</h1>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowRenderer={({ index, key, style }) => (
              <div
                className="card card-virtualized"
                style={style}
                key={data[index].id}
              >
                <div key={key} className="text-container">
                  <h3>{`${data[index].title}`}</h3>
                  <h3>{`Item: ${data[index].id} / ${data.length}`}</h3>
                  <p>{data[index].body}</p>
                </div>
              </div>
            )}
            rowCount={data.length}
            rowHeight={200}
            containerStyle={{
              overflowY: "auto",
            }}
          />
        )}
      </AutoSizer>
    </div>
  );
};
