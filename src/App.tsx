import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, News } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
