import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";


export const useGetMovies = () => {
  return useQuery({
    queryFn: async () => {
      const movies = await axiosInstance(`/trending/all/day?language=en-US`);
      console.log(movies.data.results);

      return movies.data.results;
    },
  });
};
