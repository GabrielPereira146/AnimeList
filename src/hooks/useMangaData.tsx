import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { MangaData } from "../interface/MangaData";
const API_URL = 'http://localhost:8080/works/mangas';

const fetchAllMangas = async (): AxiosPromise<MangaData[]> => {
    const response = axios.get(API_URL + '/');
    return response;
}

const fetchTopMangas = async (): AxiosPromise<MangaData[]> => {
    const response = axios.get(API_URL + '/best');
    return response;
}

const fetchSeasonManga = async (): AxiosPromise<MangaData[]> => {
    const response = axios.get(API_URL + '/season');
    return response;
}

export function useMangaData(type: string) {

    let fetchFn: () => AxiosPromise<MangaData[]> = fetchAllMangas;

    switch (type) {
        case "Best":
            fetchFn = fetchTopMangas;
            break;
        case "All":
            fetchFn = fetchAllMangas;
            break;
        case "MangaSeason":
            fetchFn = fetchSeasonManga;
            break;
    }

    const query = useQuery({
        queryFn: fetchFn,
        queryKey: ['manga-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}