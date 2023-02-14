import React from "react";
import { useParams } from "react-router-dom";
import { Heading, Loading, Share, Error } from "../../components";
import { NewsArticle } from "../../components/NewsPreview/types";
import { useQuery } from "../../hooks";
import { NotFound } from "../NotFound";

export const NewsItem: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<NewsArticle>(`/news/${id}`);

  if (error) {
    if (error.message === "AxiosError: Request failed with status code 404") {
      return <NotFound />;
    }
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Error />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const { title, image, descr, creation_date } = data!;

  return (
    <article className="m-8 flex flex-col">
      <Heading label={title} />
      <div className="my-12 md:my-8 flex flex-col items-center text-center md:block md:text-start">
        <img
          src={image}
          className="w-96 h-96 float-left object-cover rounded mb-8 md:mr-8"
          alt=""
        />
        <p className="font-normal text-lg text-white">{descr}</p>
      </div>
      <div className="flex items-start justify-between space-y-2 flex-col md:flex-row md:items-center md:space-y-0">
        <span className="text-white font-medium text-base md:text-xl">
          Publish date: {new Date(creation_date).toLocaleString("ru-RU")}
        </span>
        <Share text={"Check out new article from the Never stop: " + title} />
      </div>
    </article>
  );
};
