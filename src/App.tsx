/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";

import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
                        onSelectGenre={(genre) => {
                            setSelectedGenre(genre);
                            console.log("From App.tsx: " + genre.name);
                        }}
                    ></GenreList>
                </GridItem>
            </Show>
            <GridItem area="main">
                <PlatformSelector />
                <GameGrid selectedGenre={selectedGenre}></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
