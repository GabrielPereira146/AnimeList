import axios, { AxiosPromise } from "axios";
import { WorkData } from "../interface/WorkData";
import { useQuery } from "@tanstack/react-query";
const API_URL = 'http://localhost:8080';

const fetchAllWorks = async (): AxiosPromise<WorkData[]> => {
    const response = axios.get(API_URL + '/works/');
    return response;
}

const fetchTopWorks = async (): AxiosPromise<WorkData[]> => {
    const response = axios.get(API_URL + '/works/popularWorks');
    return response;
}


export function useWorkData(type: string) {

    let fetchFn: () => AxiosPromise<WorkData[]> = fetchAllWorks;

    switch (type) {
        case "Best":
            fetchFn = fetchTopWorks;
            break;
        case "All":
            fetchFn = fetchAllWorks;
            break;
    }

    const query = useQuery({
        queryFn: fetchFn,
        queryKey: ['work-data',type],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}