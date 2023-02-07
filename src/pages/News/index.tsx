import { useEffect, useState } from "react";
import {
  Heading,
  Loading,
  NewsCard,
  Pagination,
  Error,
} from "../../components";
import { FetchNewsPreview } from "../../components/NewsPreview/types";
import { fetchApi } from "../../utils";

export const News = () => {
  const [paginationValue, setPaginationValue] = useState<number>(1);
  const [limit, setLimit] = useState<number>(50);

  const [fetchData, setFetchData] = useState<FetchNewsPreview | null>(null);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setFetchData(null);
    fetchApi<FetchNewsPreview>(
      `/news?limit=12&offset=${(paginationValue - 1) * 12}`
    )
      .then((res) => {
        setFetchData(res.data);
        setLimit(res.data.count);
      })
      .catch(() => setFetchError(true));
  }, [paginationValue]);

  if (fetchError) {
    return (
      <div className="flex flex-col items-center m-8 justify-between min-h-screen">
        <Heading label="Latest news of Never stop" />
        <Error />
        <Pagination
          value={paginationValue}
          limit={Math.ceil(limit / 12)}
          setValue={setPaginationValue}
        />
      </div>
    );
  }

  if (!fetchData) {
    return (
      <div className="flex flex-col items-center m-8 justify-between min-h-screen">
        <Heading label="Latest news of Never stop" />
        <Loading />
        <Pagination
          value={paginationValue}
          limit={Math.ceil(limit / 12)}
          setValue={setPaginationValue}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center m-8">
      <Heading label="Latest news of Never stop" />
      <div
        className="grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      2xl:grid-cols-4
      gap-8
      my-12
      md:my-8"
      >
        <div className="hidden" />
        {fetchData.results.map(({ slug, title, descr }) => {
          return <NewsCard key={slug} id={slug} title={title} text={descr} />;
        })}
      </div>
      <Pagination
        value={paginationValue}
        limit={Math.ceil(limit / 12)}
        setValue={setPaginationValue}
      />
    </div>
  );
};
