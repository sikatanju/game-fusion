import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { Platform } from "./useGames";

// const usePlatforms = () => ({
//     data: platforms,
//     isLoading: false,
//     error: false,
// });

const usePlatforms = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>("/platforms")
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24hr
        initialData: { count: platforms.length, results: platforms },
    });

export default usePlatforms;
