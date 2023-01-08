import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Share } from "../../components";

export const NewsItem: React.FC = () => {
  const { id } = useParams();
  const title = "Text article aaaaa";
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui consectetur, adipisci corporis consequatur obcaecati aut ipsa quaerat illo beatae, eveniet unde? Omnis, hic. Doloremque iure veritatis ducimus accusantium possimus.";
  const image =
    "https://vignette4.wikia.nocookie.net/spongebob/images/9/90/Born_to_Be_Wild_045a.png/revision/latest?cb=20130713151323";
  const date = new Date();
  return (
    <article>
      <Heading label={title} />
      <div className="my-8">
        <img
          src={image}
          className="w-96 h-96 float-left object-cover rounded mr-8 mb-8"
          alt="thumbnail"
        />
        <p className="font-normal text-lg">{text}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-xl">
          {date.toLocaleString("ru-RU")}
        </span>
        <Share text={"Check out new article from the best MC ever: " + title} />
      </div>
    </article>
  );
};
