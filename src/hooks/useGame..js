import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";

const useGames = (selectedGenre, selectedPlatform) => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  console.log(selectedPlatform);
  useEffect(() => {
    const FetchData = async () => {
      try {
        setIsloading(true);
        const response = await apiClient("/games", {
          params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
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
  }, [selectedGenre.id, selectedPlatform]);

  return { data, isloading, error };
};

export default useGames;
