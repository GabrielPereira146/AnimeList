import axios, {AxiosPromise } from "axios";
import { WorkData } from "../interface/WorkData";
import { useQuery } from "@tanstack/react-query";
const API_URL = 'http://localhost:8080';

const fecthData = async (): AxiosPromise<WorkData[]> => {
    const response = axios.get(API_URL+'/works/');
    return response;
}

export function useWorkData() {
    
    const query = useQuery({
        queryFn: fecthData,
        queryKey: ['work-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}