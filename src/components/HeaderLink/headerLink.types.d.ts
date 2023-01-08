import { HTMLAttributes } from "react";

export interface HeaderLinkProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  link: string;
  mobile?: boolean;
}
