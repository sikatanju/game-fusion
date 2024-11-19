import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
    const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
    const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

    const genre = useGenre(genreId);
    const platform = usePlatform(platformId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Heading paddingY={5} fontSize="5xl" as={h1}>
            {heading}
        </Heading>
    );
};

export default GameHeading;
