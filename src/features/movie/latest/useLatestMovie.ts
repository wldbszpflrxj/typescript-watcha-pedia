import { useQuery } from "react-query";
import { latestApi } from "../../../apis/movieApi";
import { MovieDetail } from "../../../types";
import { AxiosResponse, AxiosError } from "axios";

const useLatestMoive = () => {
  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    "latestMovie",
    latestApi
  );
};
export default useLatestMoive;
