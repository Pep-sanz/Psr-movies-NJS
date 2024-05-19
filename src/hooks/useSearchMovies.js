import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

export const useSearchMovies = (query) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: async () => {
      const response = await axiosInstance.get(`/search/multi?query=${query}&include_adult=false&language=en-US&page=1`);

      return response.data.results;
    },
    enabled: !!query,
  });
};
