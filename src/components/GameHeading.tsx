import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

    return <Heading paddingY={5} fontSize='5xl' as={h1}>{heading}</Heading>;
};

export default GameHeading;
