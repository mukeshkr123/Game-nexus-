import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatformIcons from "../../hooks/useplatform";
import PropTypes from "prop-types";

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }) => {
  const { data, error } = usePlatformIcons();

  if (error) return null;

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

PlatformSelector.propTypes = {
  onSelectPlatform: PropTypes.func.isRequired,
  selectedPlatform: PropTypes.string.isRequired,
};
export default PlatformSelector;
