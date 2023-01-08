import React from "react";
import "./styles.scss";
import { NewsCardProps } from "../NewsCard/types";
import { MdArticle } from "react-icons/md";
import { cutStr } from "../../utils/commonFuncs";
import { Link } from "react-router-dom";

export const NewsCard: React.FC<NewsCardProps> = ({ text, title, id }) => {
  return (
    <Link to={`/news/${id}`}>
      <div className="w-72 h-80 news-card hover:bg-gray-200 transition cursor-pointer">
        <div className="bg-gray-900 h-1.5" />
        <div className="flex flex-col p-8 justify-around news-card__content">
          <MdArticle color="rgb(17 24 39 / var(--tw-bg-opacity))" size="40px" />
          <h5 className="font-semibold text-2xl">{title}</h5>
          <div className="font-normal text-sm">{cutStr(text, 100)}...</div>
        </div>
      </div>
    </Link>
  );
};
