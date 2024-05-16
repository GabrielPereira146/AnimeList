import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { AnimeData } from "../interface/AnimeData";
const API_URL = 'http://localhost:8080/works/animes';

const fetchAllAnimes = async (): AxiosPromise<AnimeData[]> => {
    const response = axios.get(API_URL + '/');
    return response;
}

const fetchPopularAnimes = async (): AxiosPromise<AnimeData[]> => {
    const response = axios.get(API_URL + '/popular');
    return response;
}

const fetchSeasonAnime = async (): AxiosPromise<AnimeData[]> => {
    const response = axios.get(API_URL + '/season');
    return response;
}

const fetchTopAnime = async (): AxiosPromise<AnimeData[]> => {
    const response = axios.get(API_URL + '/top');
    return response;
}


export function useAnimeData(type: string) {

    let fetchFn: () => AxiosPromise<AnimeData[]> = fetchAllAnimes;

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
        queryKey: ['anime-data',type],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}