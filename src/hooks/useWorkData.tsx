import axios, {AxiosPromise } from "axios";
import { WorkData } from "../interface/WorkData";
import { useQuery } from "@tanstack/react-query";
const API_URL = 'http://localhost:8080';

const fetchAllWorks = async (): AxiosPromise<WorkData[]> => {
    const response = axios.get(API_URL+'/works/');
    return response;
}

const fetchTopWorks = async (): AxiosPromise<WorkData[]> => {
    const response = axios.get(API_URL+'/works/bestWorks');
    return response;
}

export function useWorkData() {
    
    const query = useQuery({
        queryFn: fetchTopWorks,
        queryKey: ['work-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}