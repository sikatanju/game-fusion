import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);
    if (isLoading || error || data?.results == null || data?.count == 0)
        return null;

    return (
        <>
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3 }}
                padding={1}
                spacing={2}
                marginX={2}
                marginY={2}
            >
                {data.results.map((image) => (
                    <Image key={image.id} src={image.image} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameScreenshot;
