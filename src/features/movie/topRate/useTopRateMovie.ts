import { useQuery } from "react-query";
import { topRateApi } from "../../../apis/movieApi";
import { ListResponse, MovieDetail } from "../../../types";
import { AxiosResponse, AxiosError } from "axios";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "topRateMovie",
    topRateApi
  );
};
export default useTopRateMovie;
