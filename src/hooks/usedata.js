import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const useData = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Change to a single error state variable
  const [isloading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await apiClient.get(endpoint, requestConfig);
          const { data } = response; // Destructure the response data
          setData(data.results);
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
          setIsLoading(false);
        }
      };

      fetchData();
    },
    deps ? [...deps] : []
  );

  return { data, error, isloading };
};

export default useData;
