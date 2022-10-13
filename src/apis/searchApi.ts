import axiosInstance from ".";

export const searchApi = (query: string) =>
  axiosInstance.get(`/search/multi?query=${query}`);
