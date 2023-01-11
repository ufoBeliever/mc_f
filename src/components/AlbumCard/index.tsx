import { Link } from "react-router-dom";
import { Heading } from "../Heading";
import { AlbumCardProps } from "./types";

export const AlbumCard: React.FC<AlbumCardProps> = ({
  img,
  title,
  album_id,
}) => {
  return (
    <Link to={`/gallery/${album_id}`}>
      <div className="hover:bg-secondarygreen p-8 rounded hidden md:block">
        <Heading label={title} className={"text-start"} />
        <div className="flex items-center justify-between gap-8 w-full mt-12">
          {img.slice(0, 5).map((e, i) => {
            return (
              <div className="rounded hidden xl:block" key={i}>
                <img
                  src={e}
                  alt=""
                  className="w-48 h-48 object-cover rounded"
                />
              </div>
            );
          })}
          {img.slice(0, 3).map((e, i) => {
            return (
              <div className="rounded block xl:hidden" key={i}>
                <img
                  src={e}
                  alt=""
                  className="w-48 h-48 object-cover rounded"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="hover:bg-secondarygreen p-8 rounded block md:hidden">
        <Heading label={title} />
        <div className="flex items-center justify-center w-full mt-8">
          <div className="rounded">
            <img
              src={img[0]}
              alt=""
              className="w-48 h-48 object-cover rounded"
            />
          </div>
        </div>
      </div>
      <div className="bg-secondarydark h-px" />
    </Link>
  );
};
