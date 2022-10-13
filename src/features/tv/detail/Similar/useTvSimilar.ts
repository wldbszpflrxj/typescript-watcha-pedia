import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { similarApi } from "../../../../apis/movieApi";
import { ListResponse, TVDetail } from "../../../../types";

const useTvSimilar = (id: string) => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    ["similarTv", id],
    () => similarApi(id),
    {
      enabled: Boolean(id),
    }
  );
};

export default useTvSimilar;
