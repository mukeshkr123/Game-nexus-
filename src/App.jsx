import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/game/GameGrid";
import GenreList from "./components/genre/GenreList";
import { useState } from "react";
import PlatFormSelector from "./components/game/PlatFormSelector";
import SortSelector from "./components/game/SortSelector";
import GameHeading from "./components/game/GameHeading";

const App = () => {
  const [gameQuery, setGameQuery] = useState({});

  const handleSearch = (searchText) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  const handleSelectGenre = (genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const handleSelectPlatform = (platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSelectSortOrder = (sortOrder) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar onSearch={handleSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding="5px">
            <GenreList
              onSelectGenre={handleSelectGenre}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <Box paddingLeft={2}>
            <HStack spacing={5} marginBottom={5}>
              <PlatFormSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={handleSelectPlatform}
              />
              <SortSelector
                onSelectsortOrder={handleSelectSortOrder}
                sortOrder={gameQuery?.sortOrder}
              />
            </HStack>
          </Box>
          <GameGrid
            selectedPlatform={gameQuery.platform}
            gameQuery={gameQuery}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
