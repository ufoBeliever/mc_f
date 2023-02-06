import { useState } from "react";
import { Error, Heading, ImageViewer, Loading, Modal } from "../../components";
import { useQuery } from "../../hooks";
import "./styles.scss";

export const GalleryAlbum = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isViewerShown, setIsViewerShown] = useState<boolean>(false);
  const { data, loading, error } = useQuery<any>(`/album/linux/`);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Error />
      </div>
    );
  } else if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const { results } = data;

  return (
    <div className="m-8">
      {isViewerShown ? (
        <Modal>
          <div
            className="fixed
                    top-0
                    left-0
                    w-screen
                    h-screen
                    overflow-hidden
                    flex
                    justify-center
                    items-center
                    modal
                    p-4"
          >
            <ImageViewer
              images={results}
              index={imageIndex}
              setIndex={setImageIndex}
              setIsShown={setIsViewerShown}
            />
          </div>
        </Modal>
      ) : null}
      <Heading label="Album number 1" />
      <div
        className="mt-12
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  xl:grid-cols-3
                  2xl:grid-cols-4
                  gap-8
                  md:mt-8
                  justify-items-center
                  items-center"
      >
        {results.map(({ image }: any, i: any) => {
          return (
            <img
              key={i}
              alt=""
              src={image}
              className="border-4
              rounded
              transition
              border-transparent
              hover:border-primarygreen
              object-cover
              h-48
              cursor-pointer"
              onClick={() => {
                setIsViewerShown(true);
                setImageIndex(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
