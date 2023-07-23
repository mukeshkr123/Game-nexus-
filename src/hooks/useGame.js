// src/hooks/useData.js
// Let's assume useData.js is in the correct location with the appropriate implementation.

// src/hooks/useGames.js
import useData from "./useData";

const useGames = (gameQuery) => {
  const params = {
    genres: gameQuery?.genre?.id,
    platforms: gameQuery?.platform?.id,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  };

  const gameData = useData("/games", params, [gameQuery]);

  // You can also add additional logic or side-effects here if needed
  // using the gameData fetched from the useData hook.

  return gameData;
};

export default useGames;
