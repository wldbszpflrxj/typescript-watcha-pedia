import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { searchApi } from "../apis/searchApi";
import { ListResponse, Movie } from "../types";

const useSearch = (query: string) => {
  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(
    ["searchMulti", query],
    () => searchApi(query),
    {
      enabled: Boolean(query),
    }
  );
};

export default useSearch;
