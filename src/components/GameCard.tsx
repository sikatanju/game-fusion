import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card
            width='300px'
            borderRadius={10}
            overflow={"hidden"}
        >
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIcon
                        platform={game.parent_platforms.map(
                            (plat) => plat.platform
                        )}
                    ></PlatformIcon>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
