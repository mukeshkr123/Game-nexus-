import { Icon, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const PlatFormIconList = ({ platform }) => {
  const iconMap = {
    pc: FaWindows,
    nintendo: SiNintendo,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  console.log(platform);
  return (
    <>
      <HStack marginY={1}>
        {platform.map((platform, index) => (
          <Icon key={index} color="gray" as={iconMap[platform.slug]}>
            {/* {platform.name} */}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

PlatFormIconList.propTypes = {
  platform: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default PlatFormIconList;
