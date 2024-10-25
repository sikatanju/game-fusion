import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {data?.map((genre) => (
                <ListItem
                    paddingY="5px"
                    key={genre.id}
                    padding="5px"
                    marginLeft="5px"
                >
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}
                            // overflow={"hidden"}
                        />
                        <Text>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
