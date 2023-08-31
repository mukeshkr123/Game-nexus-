import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameSkeleton from "./GameSkeleton";
import PropTypes from "prop-types";

const GameGrid = ({ gameQuery }) => {
  const { data, isloading, error } = useGames(gameQuery);
  const games = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error && <Text> {error.message}</Text>}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isloading &&
        games.map((g) => (
          <GameCardContainer key={g}>
            <GameSkeleton />
          </GameCardContainer>
        ))}
      {data?.results?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

GameGrid.propTypes = {
  gameQuery: PropTypes.arrayOf.isRequired,
};

export default GameGrid;
