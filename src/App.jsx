import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./assets/components/navbar/Navbar";

const App = () => {
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
            Genrelists{" "}
          </GridItem>
        </Show>
        <GridItem area="main">Games</GridItem>
      </Grid>
    </>
  );
};

export default App;
