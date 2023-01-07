import React from "react";
import { NewsPreviewProps } from "./types";
import "./styles.scss";
import { Heading } from "../Heading";
import { PrimaryButton } from "../PrimaryButton";
import { Link } from "react-router-dom";
import { cutStr } from "../../utils/commonFuncs";

export const NewsPreview: React.FC<NewsPreviewProps> = ({
  text,
  image,
  id,
}) => {
  return (
    <>
      <Heading label="Find out about our latest news" />
      <div className="news-preview mt-12 relative hidden lg:flex">
        <div
          className="news-preview_text-wrapper
          bg-gray-300
          absolute
          flex
          pt-20
          px-20
          transition"
        >
          <img
            src={image}
            className="h-80 w-80 object-cover rounded-md xl:h-96 xl:w-96"
            alt="Article preview"
          />
          <span className="ml-24 font-normal text-2xl hidden xl:inline">
            {cutStr(text, 300)}{" "}
            <Link to={`/news/${id}`}>
              <span className="text-blue-600 hover:underline">
                Read more...
              </span>
            </Link>
          </span>
          <span className="ml-24 font-normal text-xl inline xl:hidden xl:text-2xl">
            {cutStr(text, 180)}{" "}
            <Link to={`/news/${id}`}>
              <span className="text-blue-600 hover:underline">
                Read more...
              </span>
            </Link>
          </span>
        </div>
        <div className="self-end w-full flex flex-col">
          <Link to="/news" className="self-end">
            <PrimaryButton label="View all latest news" />
          </Link>
        </div>
      </div>
      <div
        className="flex
                  w-full
                  justify-between
                  pt-5
                  flex-col
                  items-center
                  lg:hidden
                  md:p-10
                  md:flex-row
                  md:items-start"
      >
        <img
          src={image}
          className="md:h-72 md:w-72 h-96 w-96 object-cover rounded-md xl:h-96 xl:w-96"
          alt="Article preview"
        />
        <span className="font-normal mt-4 text-xl text-center md:text-left xl:text-2xl md:ml-10 md:mt-0">
          {cutStr(text, 230)}{" "}
          <Link to={`/news/${id}`}>
            <span className="text-blue-600 hover:underline">Read more...</span>
          </Link>
        </span>
      </div>
    </>
  );
};
