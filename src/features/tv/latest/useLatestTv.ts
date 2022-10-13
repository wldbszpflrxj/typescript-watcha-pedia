import { useQuery } from "react-query";
import { TVDetail } from "../../../types";
import { AxiosResponse, AxiosError } from "axios";
import { latestApi } from "../../../apis/tvApi";

const useLatestTv = () => {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>("latestTv", latestApi);
};
export default useLatestTv;
