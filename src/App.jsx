import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import GameGrid from "./components/game/GameGrid";
import GenreList from "./components/genre/GenreList";
import { useState } from "react";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
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
          <Navbar />{" "}
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" padding="5px">
            <GenreList
              onSelectGenre={(data) => setSelectedGenre(data)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
