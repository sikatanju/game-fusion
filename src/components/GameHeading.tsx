/* eslint-disable @typescript-eslint/no-unused-vars */
import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: platforms } = usePlatforms();
    const platformName = platforms?.results.find(
        (plat) => plat.id == gameQuery.platformId
    );

    const { data: genres } = useGenres();
    const genre = genres?.results.find((genr) => genr.id == gameQuery.genreId);

    // const genreName = genre.length > 0 ? genre[0].name : "";

    const heading = `${platformName?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading paddingY={5} fontSize="5xl" as={h1}>
            {heading}
        </Heading>
    );
};

export default GameHeading;
