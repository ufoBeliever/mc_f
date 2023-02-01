import React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  label,
  isPrimary,
  ...rest
}) => {
  return (
    <button
      className={
        `
      text-white
      py-3
      px-4
      xl:py-4
      xl:px-5
      border-4
      font-semibold
      xl:text-lg
      rounded-md
      transition ` +
        (isPrimary
          ? `bg-primarygreen border-primarygreen hover:border-secondarygreen hover:bg-secondarygreen`
          : `bg-primarydark border-primarydark hover:border-primarygreen`)
      }
      {...rest}
    >
      {label}
    </button>
  );
};
