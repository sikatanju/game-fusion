import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack justifyContent="space-between" marginY={3}>
                    <PlatformIcon
                        platform={game.parent_platforms?.map(
                            (plat) => plat.platform
                        )}
                    ></PlatformIcon>
                    <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize={"2xl"}>
                    <Link to={`/games/${game.slug}`}>{game.name}</Link>
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;
