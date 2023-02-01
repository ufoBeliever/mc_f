import "./styles.scss";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { cutStr } from "../../utils";
import { FetchNewsPreview } from "./types";
import { Loading } from "../Loading";
import { useQuery } from "../../hooks";

export const NewsPreview = () => {
  const { data, loading, error } = useQuery<FetchNewsPreview>("/");

  if (error) {
    return null;
  }

  if (loading) {
    return (
      <div>
        <Heading label="Find out about our latest news" />
        <div className="flex justify-center h-96 items-center">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading label="Find out about our latest news" />
      <div className="news-preview mt-12 relative hidden lg:flex">
        <div
          className="news-preview_text-wrapper
       bg-primarygreen
       absolute
       flex
       pt-20
       px-20
       transition"
        >
          <img
            src={data!.results[0].image}
            className="h-80 w-80 object-cover rounded-md xl:h-96 xl:w-96"
            alt=""
          />
          <span className="ml-24 font-normal text-2xl hidden xl:inline text-white">
            {cutStr(data!.results[0].descr, 300)}{" "}
            <Link to={`/news/${data!.results[0].slug}`}>
              <span className="text-secondarydark hover:underline">
                Read more...
              </span>
            </Link>
          </span>
          <span className="ml-24 font-normal text-xl inline xl:hidden xl:text-2xl text-white">
            {cutStr(data!.results[0].descr, 180)}{" "}
            <Link to={`/news/${data!.results[0].slug}`}>
              <span className="text-secondarydark hover:underline">
                Read more...
              </span>
            </Link>
          </span>
        </div>
        <div className="self-end w-full flex flex-col">
          <Link to="/news" className="self-end">
            <Button label="View all latest news" isPrimary={true} />
          </Link>
        </div>
      </div>
      <div
        className="flex
               w-full
               justify-between
               mt-8
               flex-col
               items-center
               lg:hidden
               md:p-10
               md:flex-row
               md:items-start"
      >
        <img
          src={data!.results[0].image}
          className="md:h-72 md:w-72 h-96 w-96 object-cover rounded-md xl:h-96 xl:w-96"
          alt=""
        />
        <span className="font-normal mt-4 text-xl text-center md:text-left xl:text-2xl md:ml-10 md:mt-0 text-white">
          {cutStr(data!.results[0].descr, 230)}{" "}
          <Link to={`/news/${data!.results[0].slug}`}>
            <span className="text-primarygreen hover:underline">
              Read more...
            </span>
          </Link>
        </span>
      </div>
    </div>
  );
};
