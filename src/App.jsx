import React from "react";
import "./app.css";
import {Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Dashbord from "./components/Dashbord";
import RootLayout from "./RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashbord />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
