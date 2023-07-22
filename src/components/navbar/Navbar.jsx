import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../colorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image
          src="https://cdn.iconscout.com/icon/free/png-512/free-webpack-2749382-2284772.png?f=avif&w=512"
          boxSize="60px"
        />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
