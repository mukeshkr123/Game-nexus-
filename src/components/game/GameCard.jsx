import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { PropTypes } from "prop-types";

const GameCard = ({ game }) => {
  return (
    <>
      <Card>
        <Image
          src={game.background_image}
          objectFit="cover"
          height={200}
          width="100%"
          alt={game.name}
        />
        <CardBody>
          <Heading fontSize="2xl"> {game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    background_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default GameCard;
