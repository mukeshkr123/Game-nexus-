import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PropTypes } from "prop-types";
import PlatFormIconList from "./PlatFormIconList";

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
          <HStack justifyContent="space-between">
            <PlatFormIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    background_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    parent_platforms: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default GameCard;
