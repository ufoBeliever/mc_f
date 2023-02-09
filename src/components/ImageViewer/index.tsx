import { MdOutlineNavigateNext } from "react-icons/md";
import { ImageViewerPreview } from "../ImageViewerPreview";
import { AiOutlineClose } from "react-icons/ai";
import { ImageViewerProps } from "./types";
import "./style.scss";
import { setHidden } from "../../utils";
import { useEffect, useRef } from "react";

export const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  index,
  setIndex,
  setIsShown,
  imageRef,
}) => {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const viewerRefMobile = useRef<HTMLDivElement | null>(null);

  const closeViewer = (e: Event) => {
    if (
      !viewerRef.current?.contains(e.target as Document) &&
      !imageRef.current?.contains(e.target as Document) &&
      !viewerRefMobile.current?.contains(e.target as Document)
    ) {
      setIsShown(false);
      setHidden();
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeViewer);

    return () => {
      document.removeEventListener("click", closeViewer);
    };
  }, []);

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
      className="rounded-full
      hover:bg-secondarygreen
      p-2
      disabled:bg-transparent
      relative
      h-16
      w-16"
      onClick={prevImage}
    >
      <MdOutlineNavigateNext size="100%" color="white" className="rotate-180" />
    </button>
  );

  const prevButton = (
    <button
      className="rounded-full
      hover:bg-secondarygreen
      p-2
      disabled:bg-transparent
      relative
      h-16
      w-16"
      onClick={nextImage}
    >
      <MdOutlineNavigateNext size="100%" color="white" />
    </button>
  );

  return (
    <>
      <div
        className="hidden lg:block bg-primarydark w-2/3 rounded-md p-8"
        ref={viewerRef}
      >
        <div className="flex flex-col items-end mb-4">
          <button
            className="rounded-full hover:bg-secondarygreen p-2 disabled:bg-transparent"
            onClick={() => {
              setIsShown(false);
              setHidden();
            }}
          >
            <AiOutlineClose color="white" size="30px" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="block">{nextButton}</div>
          <img
            alt=""
            src={process.env.REACT_APP_DOMAIN_MEDIA! + images[index].image}
            className="h-64 xl:h-80 object-cover rounded image"
          />
          <div className="block">{prevButton}</div>
        </div>
        <div className="flex items-center justify-center space-x-8 mt-8 bottom-buttons">
          {fill(stage * 3).map((e) => {
            return (
              <ImageViewerPreview
                key={e}
                image={process.env.REACT_APP_DOMAIN_MEDIA! + images[e].image}
                checked={index === e}
                onClick={() => {
                  setIndex(e);
                }}
              />
            );
          })}
        </div>
      </div>
      <div
        className="flex lg:hidden h-screen justify-between w-full items-center relative"
        ref={viewerRefMobile}
      >
        <button
          className="rounded-full
          hover:bg-secondarygreen
          p-2
          disabled:bg-transparent
          absolute
          top-8
          right-8"
          onClick={() => {
            setIsShown(false);
            setHidden();
          }}
        >
          <AiOutlineClose color="white" size="30px" />
        </button>
        <div className="block">{nextButton}</div>
        <img
          alt=""
          src={process.env.REACT_APP_DOMAIN_MEDIA! + images[index].image}
          className="w-1/2 object-cover rounded image max-h-screen"
        />
        <div className="block">{prevButton}</div>
      </div>
    </>
  );
};
