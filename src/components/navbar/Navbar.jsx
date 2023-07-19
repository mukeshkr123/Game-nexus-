import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "../colorModeSwitch";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image
          src="https://cdn.iconscout.com/icon/free/png-512/free-webpack-2749382-2284772.png?f=avif&w=512"
          boxSize="60px"
        />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
