import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";

const GameCard = ({
  game: { background_image, name, metacritic, parent_platforms },
}) => {
  return (
    <Card>
      <Image
        src={background_image}
        objectFit="cover"
        height={200}
        width="100%"
        alt={name}
      />
      <CardBody>
        <Heading fontSize="2xl">{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIconList
            platform={parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    background_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    metacritic: PropTypes.number.isRequired,
    parent_platforms: PropTypes.arrayOf(
      PropTypes.shape({
        platform: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default GameCard;
