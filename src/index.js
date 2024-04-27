import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Myprofile from "./routes/Myprofile";
import Home from "./routes/Home";
import AllUsers from "./routes/AllUsers";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "myprofile",
        element: <Myprofile />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
