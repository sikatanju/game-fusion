import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
    game: Game;
}

const GameAttributes = ({ game }: Props) => {
    return (
        <SimpleGrid columns={2} marginY={5} as="dl">
            <DefinitionItem term="Platforms">
                {game.parent_platforms?.map(({ platform }) => (
                    <Text key={platform.id}>{platform.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Metascore">
                <CriticScore score={game.metacritic} />
            </DefinitionItem>
            <DefinitionItem term="Genres">
                {game.genres?.map((genre) => (
                    <Text key={genre.id}>{genre.name}</Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Publishers">
                {game.publishers?.map((pub) => (
                    <Text>{pub.name}</Text>
                ))}
            </DefinitionItem>
        </SimpleGrid>
    );
};

export default GameAttributes;

/*
import { Badge, Box, List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";

const GameAttributes = () => {
  //  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
    return (
        <SimpleGrid columns={2}>
            <Box marginTop="20px">
                <Text color="gray.400" fontSize="lg" fontWeight="medium">
                    Platforms
                </Text>
                <List>
                    <ListItem>PC</ListItem>
                    <ListItem>Xbox</ListItem>
                    <ListItem>Playstation</ListItem>
                </List>
            </Box>
            <Box marginTop="20px">
                <Text color="gray.400" fontSize="lg" fontWeight="medium">
                    Metascore
                </Text>
                <Badge colorScheme="green" fontSize="md">
                    90
                </Badge>
            </Box>
            <Box marginTop="20px">
                <Text color="gray.400" fontSize="lg" fontWeight="medium">
                    Genres
                </Text>
                <List>
                  <ListItem>Action</ListItem>
                  <ListItem>Multiplayer</ListItem>
                </List>
            </Box>
            <Box marginTop="20px">
                <Text color="gray.400" fontSize="lg" fontWeight="medium">
                    Publishers
                </Text>
                <List>
                  <ListItem>Rockstar Games</ListItem>
                </List>
            </Box>
        </SimpleGrid>
    );
};

export default GameAttributes;


*/
