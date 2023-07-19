import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGame.";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, isloading, error } = useGames();

  if (isloading) return <p> Loading .....</p>;

  return (
    <>
      {error && <Text> {error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
