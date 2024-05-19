import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetTrending = (type, day) => {
  return useQuery({
    queryKey: ["trending", type, day],
    queryFn: async () => {
      const movies = await axiosInstance(`/trending/${type}/${day}?language=en-US`);
      const results = movies.data.results;
      console.log({ id: results[0].id });
      console.log(movies.data.results);

      return movies.data.results;
    },
    enabled: !!type && !!day,
  });
};
