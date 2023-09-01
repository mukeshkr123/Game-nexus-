import { useQuery } from "react-query";
import ms from "ms";
import apiClient from "../../services/api-client";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data),
    staleTime: ms("24h"),
  });

export default useGenres;
