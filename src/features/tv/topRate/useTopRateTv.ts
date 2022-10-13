import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../../types";
import { AxiosResponse, AxiosError } from "axios";
import { topRatedApi } from "../../../apis/tvApi";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayTv",
    topRatedApi
  );
};
export default useTopRateTv;
