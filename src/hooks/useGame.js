import { useInfiniteQuery, useQuery } from "react-query";
import apiClient from "../../services/api-client";

const useGames = (gameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
