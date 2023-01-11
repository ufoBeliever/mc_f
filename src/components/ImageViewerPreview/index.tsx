import { ImageViewerPreviewProps } from "./types";

export const ImageViewerPreview: React.FC<ImageViewerPreviewProps> = ({
  image,
  checked,
  ...rest
}) => {
  return (
    <button
      className={
        "border-4 rounded transition " +
        (checked ? "border-primarygreen" : "border-transparent")
      }
      {...rest}
    >
      <img
        src={image}
        alt=""
        className="w-10 h-6 sm:w-24 sm:h-14 object-cover"
      />
    </button>
  );
};
