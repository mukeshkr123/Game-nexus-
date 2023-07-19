import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const GameCardContainer = ({ children }) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

GameCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameCardContainer;
