import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre from "../../hooks/useGenre";
import PropTypes from "prop-types";

const GenreList = ({ onSelectGenre }) => {
  const { data, isloading, error } = useGenre();

  if (error) return null;
  if (isloading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem padding="5px" key={genre.id}>
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

GenreList.propTypes = {
  onSelectGenre: PropTypes.func.isRequired,
};

export default GenreList;
