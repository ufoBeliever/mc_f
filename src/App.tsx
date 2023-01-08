import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, News, NewsItem } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/" element={<News />} />
          <Route path="/news/:id" element={<NewsItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
