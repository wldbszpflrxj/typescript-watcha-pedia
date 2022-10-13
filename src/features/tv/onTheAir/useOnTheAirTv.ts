import { useQuery } from "react-query";
import { ListResponse, TVDetail } from "../../../types";
import { AxiosResponse, AxiosError } from "axios";
import { onTheAirApi } from "../../../apis/tvApi";

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "onTheAirTv",
    onTheAirApi
  );
};
export default useOnTheAirTv;
