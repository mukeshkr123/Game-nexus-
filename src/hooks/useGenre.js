import { useQuery } from "react-query";
import genres from "../data/genres";
import apiClient from "../../services/api-client";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hours,
  });

export default useGenres;
