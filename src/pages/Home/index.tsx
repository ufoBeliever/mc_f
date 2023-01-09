import React from "react";
import { NewsPreview, SloganWrapper } from "../../components";

export const Home = () => {
  const article = {
    image:
      "https://images.squarespace-cdn.com/content/51ca804ce4b0ff1650b3d00a/1399949283147-862XG8HUDPL0TYOJM7YH/622520_420911037959812_1435312304_o.jpg?format=1000w&content-type=image%2Fjpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolore mollitia iusto ex adipisci placeat, sit laboriosam maiores dicta rem fuga itaque dolores tenetur necessitatibus deserunt voluptatum, id voluptatibus! Nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolore mollitia iusto ex adipisci placeat, sit laboriosam maiores dicta rem fuga itaque dolores tenetur necessitatibus deserunt voluptatum, id voluptatibus! Nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolore mollitia iusto ex adipisci placeat, sit laboriosam maiores dicta rem fuga itaque dolores tenetur necessitatibus deserunt voluptatum, id voluptatibus! Nulla!",
    id: "1",
  };
  return (
    <div>
      <SloganWrapper />
      <div className="m-8">
        <NewsPreview {...article} />
      </div>
    </div>
  );
};
