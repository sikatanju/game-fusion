/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import { Platform } from "./hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
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
                <NavBar></NavBar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX="5px">
                    <GenreList
                        selectedGenre={gameQuery?.genre}
                        onSelectGenre={(genre) => {
                            setGameQuery({ ...gameQuery, genre });
                            console.log("From App.tsx: " + genre.name);
                        }}
                    ></GenreList>
                </GridItem>
            </Show>
            <GridItem area="main">
                <HStack spacing={3} paddingLeft={2} marginBottom={5}>
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={(platform) => {
                            setGameQuery({ ...gameQuery, platform });
                            console.log(platform.name);
                        }}
                    />
                    <SortSelector></SortSelector>
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
