import { WorkData } from "../interface/WorkData";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularWorks } from "../services/workService";



export function useWorkData(type: string) {

    const fetchFn: () => Promise<WorkData[]> = fetchPopularWorks;

    const query = useQuery({
        queryFn: fetchFn,
        queryKey: ['work-data', type],
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }
}