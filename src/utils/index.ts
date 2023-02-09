import axios from "axios";
import { Fetch } from "./types";

export const cutStr = (str: string, ln: number) => {
  return str.length > ln ? str.slice(0, ln).trim() : str;
};

export const fetchApi = async <T>(url: string): Promise<Fetch<T> | never> => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_DOMAIN + url);

    return {
      error: false,
      data,
    };
  } catch (err: any) {
    throw Error(err);
  }
};

export const setHidden = () => {
  if (document.body.style.overflow !== "hidden") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};
