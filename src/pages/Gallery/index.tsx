import { useState } from "react";
import { ImageViewer, Modal } from "../../components";
import "./style.scss";

export const Gallery = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isViewerShown, setIsViewerShown] = useState<boolean>(true);
  const images = [
    "https://c1.peakpx.com/wallpaper/218/94/384/cat-kitten-black-animal-pet-kitty-wallpaper.jpg",
    "https://forum.archlabslinux.com/uploads/default/optimized/2X/8/8c39bbe5a075944837ff782134ee415abb3b1a44_2_1380x776.jpeg",
    "https://1.bp.blogspot.com/-mKIdMWZR_-U/T3a3cR4Wp0I/AAAAAAAAGQc/kpyhXbnJ5BI/s1600/Capybara-02.JPG",
    "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2018/10/Linux-Beta.jpg",
    "https://static.haydenjames.io/wp-content/uploads/2017/05/Debian_18_05_2017_22_07_32.png",
  ];
  return isViewerShown ? (
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
          images={images}
          index={imageIndex}
          setIndex={setImageIndex}
          isShown={isViewerShown}
          setIsShown={setIsViewerShown}
        />
      </div>
    </Modal>
  ) : null;
};
