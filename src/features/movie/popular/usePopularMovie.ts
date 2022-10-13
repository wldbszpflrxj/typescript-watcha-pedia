import { useQuery } from "react-query";
import { popularApi } from "../../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../../types";
import { AxiosResponse, AxiosError } from "axios";

const useNowPlayingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "popularMovie",
    popularApi
  );
};
export default useNowPlayingMovie;
