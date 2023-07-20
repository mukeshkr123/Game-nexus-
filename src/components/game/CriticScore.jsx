import { Badge } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CriticScore = ({ score }) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize="14px" borderRadius="4px" padding={2}>
        {score}
      </Badge>
    </>
  );
};

CriticScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CriticScore;
