/* eslint-disable @typescript-eslint/no-unused-vars */
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data: game, isLoading, error } = useGame(slug!);
    if (isLoading) return <Spinner />;
    if (error || !game) throw error;
    return (
        <>
            {" "}
            <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
                <GridItem>
                    <Heading marginBottom={2}>{game.name}</Heading>
                    <ExpandableText>{game.description_raw}</ExpandableText>
                    <GameAttributes game={game} />
                </GridItem>
                <GridItem>
                    <GameScreenshots gameId={game.id} />
                    <GameTrailer gameId={game.id} />
                </GridItem>
            </SimpleGrid>
        </>
    );
};

export default GameDetailPage;
