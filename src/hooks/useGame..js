import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const useGames = (selectedGenre) => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setIsloading(true);
        const response = await apiClient("/games", {
          params: {
            genre: selectedGenre?.id,
          },
        });
        const { data } = response;
        setData(data.results);
        setIsloading(false);
      } catch (error) {
        setError(error.message);
        setIsloading(false);
      }
    };

    FetchData();
  }, [selectedGenre.id]);

  return { data, isloading, error };
};

export default useGames;
