import { useState } from "react";
import { Heading, NewsCard, Pagination } from "../../components";
import "./style.scss";

export const News = () => {
  const paginationLimit = 24;
  const [paginationValue, setPaginationValue] = useState<number>(1);

  return (
    <div className="flex flex-col items-center m-8">
      <Heading label="Latest news of Best MC ever" />
      <div className="flex flex-wrap justify-around gap-8 my-8">
        <div className="hidden" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
          return (
            <NewsCard
              key={e}
              id={e.toString()}
              title="Kolaborasi di dalam tim"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            />
          );
        })}
      </div>
      <Pagination
        value={paginationValue}
        limit={paginationLimit}
        setValue={setPaginationValue}
      />
    </div>
  );
};
