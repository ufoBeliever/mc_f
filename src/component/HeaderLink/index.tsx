import React from "react";
import { Link } from "react-router-dom";
import { HeaderLinkProps } from "./headerLink.types";

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  label,
  link,
  mobile,
}) => {
  return (
    <Link to={link}>
      <button
        className={
          mobile
            ? `
                text-white
                text-lg
                font-medium
                `
            : `
                text-white
                text-sm
                font-medium
                border-b-2
                border-transparent
                pb-px
                transition
                hover:border-white`
        }
      >
        {label}
      </button>
    </Link>
  );
};
