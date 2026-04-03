import { createBrowserRouter } from "react-router-dom";
import Layout from "../componets/Layout";
import Hero from "../componets/Hero";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import PageNot from "../pages/PageNot";

let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/education",
        element: <Education />,
      },
       {
        path: "/experience",
        element: <Experience />,
      },
       {
        path: "/projects",
        element: <Projects />,
      },
       {
        path: "/skills",
        element: <Skills />,
      },
      {
        path:"*",
     element:<PageNot/>}
    ],
  },
]);

export default myRouter;
