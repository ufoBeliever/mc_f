import axios from "axios";
import { Fetch } from "./types";

export const cutStr = (str: string, ln: number) => {
  return str.length > ln ? str.slice(0, ln).trim() : str;
};

export const fetch = async <T>(url: string): Promise<Fetch<T> | never> => {
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