import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../colorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image
        src="https://cdn.iconscout.com/icon/free/png-512/free-webpack-2749382-2284772.png?f=avif&w=512"
        boxSize="55px"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
