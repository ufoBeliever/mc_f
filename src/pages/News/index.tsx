import { useEffect, useState } from "react";
import {
  Heading,
  Loading,
  NewsCard,
  Pagination,
  Error,
} from "../../components";
import { FetchNewsPreview } from "../../components/NewsPreview/types";
import { fetch } from "../../utils/commonFuncs";

export const News = () => {
  const [paginationValue, setPaginationValue] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);

  const [fetchData, setFetchData] = useState<FetchNewsPreview | null>(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setFetchData(null);
    fetch<FetchNewsPreview>(`/?limit=10&offset=${paginationValue - 1 + "0"}`)
      .then((res) => {
        setFetchData(res.data);
        setLimit(res.data.count);
      })
      .catch(() => setFetchError(true));
  }, [paginationValue]);

  if (fetchError) {
    return (
      <div className="flex flex-col items-center m-8 justify-between min-h-screen">
        <Heading label="Latest news of Best MC ever" />
        <Error />
        <Pagination
          value={paginationValue}
          limit={Math.ceil(limit / 10)}
          setValue={setPaginationValue}
        />
      </div>
    );
  }

  if (!fetchData) {
    return (
      <div className="flex flex-col items-center m-8 justify-between min-h-screen">
        <Heading label="Latest news of Best MC ever" />
        <Loading />
        <Pagination
          value={paginationValue}
          limit={Math.ceil(limit / 10)}
          setValue={setPaginationValue}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center m-8">
      <Heading label="Latest news of Best MC ever" />
      <div className="flex flex-wrap justify-around gap-8 my-12 md:my-8">
        <div className="hidden" />
        {fetchData.results.map((e) => {
          return (
            <NewsCard key={e.slug} id={e.slug} title={e.title} text={e.descr} />
          );
        })}
      </div>
      <Pagination
        value={paginationValue}
        limit={Math.ceil(limit / 10)}
        setValue={setPaginationValue}
      />
    </div>
  );
};
