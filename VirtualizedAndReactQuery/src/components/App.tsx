import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { SelectData } from "./SelectData";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Characters from "./Characters";
import PopularDishes from "./PopularDishes";
import SampleList from "./SampleList";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <SelectData />
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/popular" element={<PopularDishes />} />
              <Route path="/samplelist" element={<SampleList />} />
              <Route
                path="*"
                element={<div className="not-found">Not Found</div>}
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
