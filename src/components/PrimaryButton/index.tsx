import React from "react";
import { PrimaryButtonProps } from "./types";

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
  return (
    <button
      className="bg-primarygreen
    text-white
    py-3
    px-4
    xl:py-4
    xl:px-5
    font-semibold
    xl:text-lg
    rounded-md
    hover:bg-secondarygreen
    transition"
    >
      {label}
    </button>
  );
};
