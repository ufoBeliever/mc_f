import React from "react";
import "./styles.scss";
import { NewsCardProps } from "../NewsCard/types";
import { MdArticle } from "react-icons/md";
import { cutStr } from "../../utils";
import { Link } from "react-router-dom";

export const NewsCard: React.FC<NewsCardProps> = ({ text, title, id }) => {
  return (
    <Link to={`/news/${id}`}>
      <div className="w-72 h-80 bg-primarygreen news-card hover:bg-secondarygreen transition cursor-pointer text-white">
        <div className="bg-secondarydark h-1.5" />
        <div className="flex flex-col p-8 justify-around news-card__content">
          <MdArticle color="white" size="40px" />
          <h5 className="font-semibold text-2xl">{title}</h5>
          <div className="font-normal text-sm">{cutStr(text, 100)}...</div>
        </div>
      </div>
    </Link>
  );
};
