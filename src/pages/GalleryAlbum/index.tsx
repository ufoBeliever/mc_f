import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Error, Heading, ImageViewer, Loading, Modal } from "../../components";
import { useQuery } from "../../hooks";
import { setHidden } from "../../utils";

export const GalleryAlbum = () => {
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isViewerShown, setIsViewerShown] = useState<boolean>(false);
  const { data, loading, error } = useQuery<any>(`/album/${id}`);

  const imageRef = useRef<HTMLImageElement | null>(null);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Error />
      </div>
    );
  }
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const { images, title } = data;

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
                    bg-modal-bg-8
                    p-4
                    z-50"
          >
            <ImageViewer
              imageRef={imageRef}
              images={images}
              index={imageIndex}
              setIndex={setImageIndex}
              setIsShown={setIsViewerShown}
            />
          </div>
        </Modal>
      ) : null}
      <Heading label={title} />
      <div
        ref={imageRef}
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
        {images.map(({ image }: any, i: any) => {
          return (
            <img
              key={i}
              alt=""
              src={process.env.REACT_APP_DOMAIN_MEDIA! + image}
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
                setHidden();
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
