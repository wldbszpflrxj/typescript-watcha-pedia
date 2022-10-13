import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { detailApi } from "../../../apis/tvApi";
import { TVDetail } from "../../../types";

const useTvDetail = (id: string) => {
  return useQuery<AxiosResponse<TVDetail>, AxiosError>(
    ["tvDetail", id],
    () => detailApi(id),
    {
      enabled: Boolean(id),
    }
  );
};

export default useTvDetail;
