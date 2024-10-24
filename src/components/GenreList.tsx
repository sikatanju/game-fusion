import useGenres from "../hooks/useGenres";
// import { Genre } from "../hooks/useGenres";

const GenreList = () => {
    const { genres } = useGenres();

    return (
        <ul>
            {genres?.map((genre) => (
                <li>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;
