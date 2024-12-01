import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client.ts";
import genres from "../data/genres.ts";
import Genre from "../entities/Genre.ts";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24hr
        initialData: genres,
    });

export default useGenres;
