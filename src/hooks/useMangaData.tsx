import { useQuery } from "@tanstack/react-query";
import { fetchAllMangas, fetchPopularMangas, fetchSeasonMangas, fetchTopMangas } from "../services/mangaService";
import { MangaData } from "../interface/MangaData";

export function useMangaData(type: string) {

    let fetchFn: () => Promise<MangaData[]> = fetchAllMangas;

    switch (type) {
        case "Popular":
            fetchFn = fetchPopularMangas;
            break;
        case "Top":
            fetchFn = fetchTopMangas;
            break;
        case "All":
            fetchFn = fetchAllMangas;
            break;
        case "Mangaeason":
            fetchFn = fetchSeasonMangas;
            break;
    }

    const query = useQuery({
        queryFn: fetchFn,
        queryKey: ['manga-data', type],
        retry: 2
    });

    return {
        ...query,
        data: query.data
        
    };
}
