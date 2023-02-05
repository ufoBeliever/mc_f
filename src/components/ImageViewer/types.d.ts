export interface ImageViewerProps {
  images: Array<any>;
  index: number;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
