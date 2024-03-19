import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./containers/Main/Main";
import Favorites from "./containers/Favorites/Favorites";
import Details from "./containers/Details/Details";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details" element={<h2>vtoroi</h2>} />
      </Route>
    </Routes>
  );
};

export default Views;
