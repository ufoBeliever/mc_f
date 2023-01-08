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
        "font-semibold w-10 h-10 hover:bg-blue-200 rounded transition " +
        (checked ? "hover:bg-blue-500 bg-blue-500 text-white" : "")
      }
      {...rest}
    >
      {num}
    </button>
  );
};
