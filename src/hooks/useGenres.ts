import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres.ts";
import APIClient from "../services/api-client.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24hr
        initialData: { count: genres.length, results: genres },
    });

export default useGenres;
