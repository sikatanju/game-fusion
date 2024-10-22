import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    // eslint-disable-next-line prefer-const
    let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
    return (
        <Badge
            colorScheme={color}
            fontSize="14px"
            paddingX="4px"
            borderRadius="4px"
        >
            {score}
        </Badge>
    );
};

export default CriticScore;
