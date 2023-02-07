import { Link } from "react-router-dom";
import { AlbumCardProps } from "./types";

export const AlbumCard: React.FC<AlbumCardProps> = ({
  image,
  title,
  album_id,
}) => {
  return (
    <Link to={`/gallery/${album_id}`}>
      <div
        className="w-64
      h-64
      relative
      group
      flex
      items-center
      justify-center
      overflow-hidden"
      >
        <div
          className="absolute
        bg-primarydark
        bg-transparent
        bg-modal-bg-7
        md:bg-transparent
        md:group-hover:bg-modal-bg-7
        transition
        w-64
        h-14
        bottom-0
        md:h-64
        z-100
        flex
        items-end
        p-4
        text-white
        md:text-transparent
        group-hover:text-white"
        >
          <span className="uppercase font-semibold text-xl">{title}</span>
        </div>
        <img className="transition w-64 h-64 object-cover" alt="" src={image} />
      </div>
    </Link>
  );
};
