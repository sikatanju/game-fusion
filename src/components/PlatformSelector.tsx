import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformList = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data, error } = usePlatforms();

    const selectedPlatform = usePlatform(selectedPlatformId);
    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformList;

/*
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.id ? selectedPlatform.name : "Platforms"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform)}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

*/
