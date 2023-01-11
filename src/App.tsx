import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GalleryAlbum } from "./pages";
import { Layout, Home, News, NewsItem, Gallery } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/" element={<News />} />
          <Route path="/gallery/" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryAlbum />} />
          <Route path="/news/:id" element={<NewsItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
