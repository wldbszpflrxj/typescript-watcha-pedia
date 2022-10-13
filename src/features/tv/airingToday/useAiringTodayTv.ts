import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../../types";
import { AxiosResponse, AxiosError } from "axios";
import { airingTodayApi } from "../../../apis/tvApi";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "airingTodayTv",
    airingTodayApi
  );
};
export default useAiringTodayTv;
