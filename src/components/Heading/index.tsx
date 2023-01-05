import React from "react";
import { HeadingProps } from "./types";

export const Heading: React.FC<HeadingProps> = ({ label }) => {
  return (
    <h2 className="font-semibold text-3xl lg:text-4xl text-center">{label}</h2>
  );
};
