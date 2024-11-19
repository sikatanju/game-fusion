import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const setGenreId = useGameQueryStore((s) => s.setGenreId);
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <Box padding="5px">
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem paddingY="5px" key={genre.id}>
                        <HStack>
                            <Image
                                objectFit={"cover"}
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace={"normal"}
                                textAlign="left"
                                fontWeight={
                                    genre.id == selectedGenreId
                                        ? "bold"
                                        : "normal"
                                }
                                onClick={() => setGenreId(genre.id)}
                                fontSize="lg"
                                variant="link"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GenreList;
