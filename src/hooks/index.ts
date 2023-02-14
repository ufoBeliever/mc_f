import { useEffect, useState } from "react";
import { fetchApi } from "../utils";

interface QueryType<T> {
  data: T | null;
  loading: boolean;
  error: any | null;
}

export const useQuery = <T>(url: string) => {
  const [fetchData, setFetchData] = useState<QueryType<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchApi<T>(url)
      .then(({ data }) =>
        setFetchData({
          data,
          loading: false,
          error: null,
        })
      )
      .catch((error) => {
        setFetchData({
          data: null,
          loading: false,
          error: error,
        });
      });
  }, [url]);

  return fetchData;
};
