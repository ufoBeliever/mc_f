import { useEffect, useState } from "react";
import { fetch } from "../utils";

interface QueryType<T> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

export const useQuery = <T>(url: string) => {
  const [fetchData, setFetchData] = useState<QueryType<T>>({
    data: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    fetch<T>(url)
      .then((res) =>
        setFetchData({
          data: res.data,
          loading: false,
          error: false,
        })
      )
      .catch(() =>
        setFetchData({
          data: null,
          loading: false,
          error: true,
        })
      );
  }, [url]);

  return fetchData;
};
