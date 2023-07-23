import {
  Button,
  HStack,
  Heading,
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
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem padding="5px" key={genre.id}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
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
    </>
  );
};

GenreList.propTypes = {
  onSelectGenre: PropTypes.func.isRequired,
};

export default GenreList;
