import React from "react";
import { PaginationButtonProps } from "./types";

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  num,
  checked,
  ...rest
}) => {
  return (
    <button
      className={
        "font-semibold w-10 h-10 hover:bg-secondarygreen rounded transition text-white " +
        (checked ? "hover:bg-primarygreen bg-primarygreen" : "")
      }
      {...rest}
    >
      {num}
    </button>
  );
};
