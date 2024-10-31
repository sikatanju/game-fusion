import genres from "../data/Genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, erro: false });

export default useGenres;
