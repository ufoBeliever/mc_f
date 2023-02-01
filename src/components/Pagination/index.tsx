import { PaginationButton } from "../PaginationButton";
import React from "react";
import { PaginationProps } from "./types";
import { MdOutlineNavigateNext } from "react-icons/md";

export const Pagination: React.FC<PaginationProps> = ({
  value,
  limit,
  setValue,
}) => {
  const fill = (from: number) => {
    let res = [];
    for (let i = 0; i < 5; i++) {
      if (from + i <= limit) {
        res.push(from + i);
      }
    }
    return res;
  };

  const stage = Math.floor((value - 1) / 5);

  const incrementValue = () => {
    if (value < limit) {
      setValue((prev) => prev + 1);
    }
  };

  const decrementValue = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };
  return (
    <div className="flex items-center">
      <button
        disabled={value === 1}
        className="rounded-full hover:bg-secondarygreen p-2 mr-2 disabled:bg-transparent"
        onClick={decrementValue}
      >
        <MdOutlineNavigateNext
          size="30px"
          color="white"
          className="rotate-180"
        />
      </button>
      <div>
        {fill(stage * 5 + 1).map((e) => {
          return (
            <PaginationButton
              key={e}
              num={e}
              checked={value === e}
              onClick={() => setValue(e)}
            />
          );
        })}
      </div>
      <button
        disabled={value === limit}
        className="rounded-full hover:bg-secondarygreen p-2 ml-2 disabled:bg-transparent"
        onClick={incrementValue}
      >
        <MdOutlineNavigateNext size="30px" color="white" />
      </button>
    </div>
  );
};
