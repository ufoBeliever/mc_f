import { Link } from "react-router-dom";
import { AlbumCardProps } from "./types";

export const AlbumCard: React.FC<AlbumCardProps> = ({
  img,
  title,
  album_id,
}) => {
  return (
    <Link to={`/gallery/${album_id}`}>
      <div className="hover:bg-secondarygreen p-8 rounded hidden md:block">
        <h2 className="font-semibold text-2xl text-start text-white">
          {title}
        </h2>
        <div className="flex items-center justify-between gap-8 w-full mt-6">
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
        <h2 className="font-semibold text-2xl text-start text-white">
          {title}
        </h2>
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
