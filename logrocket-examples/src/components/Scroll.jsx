import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import InfiniteScroll from "react-infinite-scroller";

import '../index.css';

function Scroll() {
  const itemsPerPage = 20;
  const [hasMore, setHasMore] = useState(true);
  const [records, setRecords] = useState(itemsPerPage);

  const data = new Array(1000).map((value, index) => ({
    id: index,
    name: faker.name.firstName(5),
    body: faker.lorem.paragraph(8),
  }));
  const showItems = (posts) => {
    let items = [];
    for (let i = 0; i < records; i++) {
      items.push(
          <div className="post" key={posts[i].id}>
            <h3>{`${posts[i].name} - ${posts[i].id}`}</h3>
            <p>{posts[i].body}</p>
          </div>
      );
    }
    return items;
  };

  const loadMore = () => {
    if (records === data.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setRecords(records + itemsPerPage);
      }, 2000);
    }
  };
  return (
      <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<h4 className="loader">Loading...</h4>}
          useWindow={false}
      >
        {showItems(data)}
      </InfiniteScroll>
  );
}
export default Scroll;