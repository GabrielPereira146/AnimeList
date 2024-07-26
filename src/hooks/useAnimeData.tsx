import { useQuery } from "@tanstack/react-query";
import { AnimeData } from "../interface/AnimeData";
import { fetchAllAnimes, fetchPopularAnimes, fetchSeasonAnime, fetchTopAnime } from "../services/animeService";

export function useAnimeData(type: string) {

    let fetchFn: () => Promise<AnimeData[]> = fetchAllAnimes;

    switch (type) {
        case "Popular":
            fetchFn = fetchPopularAnimes;
            break;
        case "Top":
            fetchFn = fetchTopAnime;
            break;
        case "All":
            fetchFn = fetchAllAnimes;
            break;
        case "AnimeSeason":
            fetchFn = fetchSeasonAnime;
            break;
    }

    const query = useQuery({
        queryFn: fetchFn,
        queryKey: ['anime-data', type],
        retry: 2
    });

    return {
        ...query,
        data: query.data
        
    };
}
