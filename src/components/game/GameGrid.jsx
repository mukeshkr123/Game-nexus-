import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGame.";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameSkeleton from "./GameSkeleton";
import PropTypes from "prop-types";

const GameGrid = ({ selectedGenre, selectedPlatform }) => {
  const { data, isloading, error } = useGames(selectedGenre, selectedPlatform);
  const games = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text> {error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isloading &&
          games.map((g) => (
            <GameCardContainer key={g}>
              <GameSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

GameGrid.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  selectedPlatform: PropTypes.string.isRequired,
};

export default GameGrid;
