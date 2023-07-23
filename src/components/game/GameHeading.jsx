import { Heading } from "@chakra-ui/react";
import { PropTypes } from "prop-types";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery?.platform?.name || " "} ${
    gameQuery?.genre?.name || " "
  } Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

GameHeading.propTypes = {
  gameQuery: PropTypes.shape({
    platform: PropTypes.shape({
      name: PropTypes.string,
    }),
    genre: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default GameHeading;
