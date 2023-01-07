import { Heading, NewsCard } from "../../components";
import "./style.scss";

export const News = () => {
  return (
    <div>
      <Heading label="Latest news of Best MC ever" />
      <div className="flex flex-wrap justify-around gap-8 mt-8">
        <div className="hidden" />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
          return (
            <NewsCard
              key={e}
              title="Kolaborasi di dalam tim"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet, consectetur adipiscing elit, sed do ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            />
          );
        })}
      </div>
    </div>
  );
};
