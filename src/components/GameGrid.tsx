import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                spacing={10}
                justifyContent="center"
                justifyItems="center"
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                    ))}
                {games.map((game) => (
                    <GameCard key={game.id} game={game}></GameCard>
                    // <li key={game.id}>{game.name}</li>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
