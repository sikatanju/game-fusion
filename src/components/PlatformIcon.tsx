import { BsGlobe } from "react-icons/bs";
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";

interface Props {
    platform: Platform[];
}

const PlatformIcon = ({ platform }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    };
    return (
        <>
            <HStack marginY={1.5}>
                {platform?.map((plat) => (
                    <Icon
                        key={plat.id}
                        as={iconMap[plat.slug]}
                        color="gray.500"
                    />
                ))}
            </HStack>
        </>
    );
};

export default PlatformIcon;
