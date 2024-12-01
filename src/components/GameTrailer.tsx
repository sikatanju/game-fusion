import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data } = useTrailers(gameId);
    const first = data?.results[0];

    return first ? (
        <video src={first.data.max} poster={first.preview} controls />
    ) : null;
};

export default GameTrailer;
