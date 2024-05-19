import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

export const useGetDetailMovies = (movieId) => {
  return useQuery({
    queryKey: ["movie details", movieId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/movie/${movieId}?language=en-US`);

      return response.data.results;
    },
    enabled: !!query,
  });
};
