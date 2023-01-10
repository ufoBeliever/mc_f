export interface ImageViewerProps {
  images: Array<string>;
  index: number;
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
