import React from "react";
import { RouterProvider } from "react-router-dom";
import myRouter from "./routes/route";

const App = () => {
  // toast.success("react")
  return (
    <React.Fragment>
      <RouterProvider router={myRouter} />
    </React.Fragment>
  );
};

export default App;
