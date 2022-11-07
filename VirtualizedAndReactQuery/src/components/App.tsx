import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import {SelectData} from "./SelectData";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <QueryClientProvider client={queryClient}>
            <SelectData />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
