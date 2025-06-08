import { lazy, Suspense } from "react";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/loader/Loader";
const ClientLayout = lazy(() => import("./layouts/ClientLayout"));
const About = lazy(() => import("./pages/about/About"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const Contact = lazy(() => import("./pages/contact/Contact"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/tech-stack",
          element: <div>Tech Stack</div>,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contacts",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />;
    </Suspense>
  );
}

export default App;
