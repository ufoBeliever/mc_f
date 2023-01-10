import { HTMLAttributes } from "react";

export interface ImageViewerPreviewProps
  extends HTMLAttributes<HTMLButtonElement> {
  image: string;
  checked?: boolean;
}
