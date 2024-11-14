/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import { useState } from "react";
import GameGrid from "./components/GameGrid.tsx";
import GameHeading from "./components/GameHeading.tsx";
import GenreList from "./components/GenreList.tsx";
import NavBar from "./components/NavBar.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string | null;
    searchText: string | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `'nav nav' 'aside main'`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                ></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX="5px">
                    <GenreList
                        selectedGenreId={gameQuery?.genreId || -1}
                        onSelectGenre={(genre) => {
                            setGameQuery({ ...gameQuery, genreId: genre.id });
                        }}
                    ></GenreList>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery}></GameHeading>
                    <HStack spacing={3} marginBottom={5}>
                        <PlatformSelector
                            selectedPlatformId={gameQuery.platformId}
                            onSelectPlatform={(platform) => {
                                setGameQuery({
                                    ...gameQuery,
                                    platformId: platform.id,
                                });
                            }}
                        />
                        <SortSelector
                            selectedSortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) => {
                                setGameQuery({ ...gameQuery, sortOrder });
                            }}
                        ></SortSelector>
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
