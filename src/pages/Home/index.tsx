import React from "react";
import { NewsPreview, SloganWrapper } from "../../components";

export const Home = () => {
  return (
    <div>
      <SloganWrapper />
      <div className="m-8">
        <NewsPreview />
      </div>
    </div>
  );
};
