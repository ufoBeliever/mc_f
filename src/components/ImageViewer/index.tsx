import { MdOutlineNavigateNext } from "react-icons/md";
import { ImageViewerPreview } from "../ImageViewerPreview";
import { AiOutlineClose } from "react-icons/ai";
import { ImageViewerProps } from "./types";
import "./style.scss";

export const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  index,
  setIndex,
  setIsShown,
}) => {
  const nextImage = () => {
    if (index !== images.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  const prevImage = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  const fill = (from: number) => {
    let res = [];
    for (let i = 0; i < 3; i++) {
      if (from + i <= images.length - 1) {
        res.push(from + i);
      }
    }
    return res;
  };

  const stage = Math.floor(index / 3);

  const nextButton = (
    <button
      className="rounded-full hover:bg-secondarygreen p-2 disabled:bg-transparent"
      onClick={prevImage}
    >
      <MdOutlineNavigateNext size="30px" color="white" className="rotate-180" />
    </button>
  );

  const prevButton = (
    <button
      className="rounded-full hover:bg-secondarygreen p-2 disabled:bg-transparent"
      onClick={nextImage}
    >
      <MdOutlineNavigateNext size="30px" color="white" />
    </button>
  );

  return (
    <div className="bg-primarydark w-5/6 sm:w-4/5 md:w-2/3 rounded-md p-4 lg:p-8">
      <div className="flex flex-col items-end mb-4">
        <button
          className="rounded-full hover:bg-secondarygreen p-2 disabled:bg-transparent"
          onClick={() => setIsShown(false)}
        >
          <AiOutlineClose color="white" size="30px" />
        </button>
      </div>
      <div className="flex justify-center sm:justify-between items-center">
        <div className="hidden sm:block">{nextButton}</div>
        <img
          alt=""
          src={process.env.REACT_APP_DOMAIN_MEDIA! + images[index].image}
          className="h-44 lg:h-64 xl:h-80 object-cover rounded image"
        />
        <div className="hidden sm:block">{prevButton}</div>
      </div>
      <div className="flex items-center justify-center space-x-2 lg:space-x-8 mt-8 bottom-buttons">
        <div className="block sm:hidden">{nextButton}</div>
        {fill(stage * 3).map((e) => {
          return (
            <ImageViewerPreview
              key={e}
              image={process.env.REACT_APP_DOMAIN_MEDIA! + images[e].image}
              checked={index === e}
              onClick={() => setIndex(e)}
            />
          );
        })}
        <div className="block sm:hidden">{prevButton}</div>
      </div>
    </div>
  );
};
