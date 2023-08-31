import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameSkeleton from "./GameSkeleton";
import PropTypes from "prop-types";
import React from "react";

const GameGrid = ({ gameQuery }) => {
  const {
    data,
    isloading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const games = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error && <Text> {error.message}</Text>}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isloading &&
          games.map((g) => (
            <GameCardContainer key={g}>
              <GameSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading...." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

GameGrid.propTypes = {
  gameQuery: PropTypes.arrayOf.isRequired,
};

export default GameGrid;
