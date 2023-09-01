import { useQuery } from "react-query";
import ms from "ms";
import apiClient from "../../services/api-client";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get("/platforms/lists/parents").then((res) => res.data),
    staleTime: ms("24h"),
  });

export default usePlatforms;
