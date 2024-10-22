import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image}></Image>
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <PlatformIcon
                    platform={game.parent_platforms.map(
                        (plat) => plat.platform
                    )}
                ></PlatformIcon>
            </CardBody>
        </Card>
    );
};

export default GameCard;
