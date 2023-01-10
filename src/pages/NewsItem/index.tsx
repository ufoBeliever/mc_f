import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heading, Loading, Share, Error } from "../../components";
import { NewsArticle } from "../../components/NewsPreview/types";
import { fetch } from "../../utils/commonFuncs";

export const NewsItem: React.FC = () => {
  const { id } = useParams();

  const [fetchData, setFetchData] = useState<NewsArticle | null>(null);
  const [fetchError, setFetchError] = useState<boolean>(false);

  useEffect(() => {
    fetch<NewsArticle>(`/${id}`)
      .then((res) => setFetchData(res.data))
      .catch(() => setFetchError(true));
  }, []);

  if (fetchError) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Error />
      </div>
    );
  }

  if (!fetchData) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <article className="m-8">
      <Heading label={fetchData.title} />
      <div className="my-8 flex flex-col items-center text-center md:block md:text-start">
        <img
          src={fetchData.image}
          className="w-96 h-96 float-left object-cover rounded mb-8 md:mr-8"
          alt="thumbnail"
        />
        <p className="font-normal text-lg text-white">{fetchData.descr}</p>
      </div>
      <div className="w-screen flex items-start justify-between space-y-2 flex-col md:flex-row md:items-center md:space-y-0">
        <span className="text-white font-medium text-base md:text-xl">
          Publish date:{" "}
          {new Date(fetchData.creation_date).toLocaleString("ru-RU")}
        </span>
        <Share
          text={
            "Check out new article from the best MC ever: " + fetchData.title
          }
        />
      </div>
    </article>
  );
};
