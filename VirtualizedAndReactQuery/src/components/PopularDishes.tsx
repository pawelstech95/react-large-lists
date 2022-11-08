import React, { useMemo } from "react";

import { usePopularDishes } from "../hooks/usePopularDishes";
import { PopularDishesList } from "./PopularDishesList";

const PopularDishes = () => {
  const { data, status } = usePopularDishes();

  const mutatedData = useMemo(() => {
    return data;
  }, [data]);

  if (status === "loading") {
    return <div className="loading">Loading...</div>;
  }
  if (status === "error") {
    return <div className="error">Error...</div>;
  }

  return (
    <>
      {mutatedData && (
        <div style={{ width: "100%", height: "100vh" }}>
          <PopularDishesList data={mutatedData} />
        </div>
      )}
    </>
  );
};

export default PopularDishes;
