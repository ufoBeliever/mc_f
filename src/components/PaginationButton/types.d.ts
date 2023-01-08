import { HTMLAttributes } from "react";

export interface PaginationButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  num: number | string;
  checked?: boolean;
}
