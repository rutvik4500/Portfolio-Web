import React from "react";
import { RouterProvider } from "react-router-dom";
import myRouter from "./routes/route";

const App = () => {
 
  return (
    <React.Fragment>
      <RouterProvider router={myRouter} />
    </React.Fragment>
  );
};

export default App;
