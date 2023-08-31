import { useQuery } from "react-query";
import platforms from "../data/platform";
import apiClient from "../../services/api-client";

// const usePlatforms = () => useData("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default usePlatforms;
