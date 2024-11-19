import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if (error) return <Text>{error.message}</Text>;

    const fetchedGamesCount =
        data?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;

    return (
        <InfiniteScroll
            dataLength={fetchedGamesCount}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Spinner padding="10px" />}
        >
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding="10px"
                spacing={6}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                        </GameCardContainer>
                    ))}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCardContainer key={game.id}>
                                <GameCard key={game.id} game={game}></GameCard>
                            </GameCardContainer>
                        ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            {isFetchingNextPage && (
                <Button padding="10px" margin="10px 0px 20px 10px">
                    Loading...
                </Button>
            )}
        </InfiniteScroll>
    );
};

export default GameGrid;
