import useSWR from 'swr'
import { API_KEY } from "../../../env";
import {getPopulars} from "../../../services/api/genres";

interface UsePopularsProps {
    language: string,
    page?: string | number
}

export const usePopulars = ({language, page = 1}: UsePopularsProps) => {

    const {data, error } = useSWR(`movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`, getPopulars)

    const isLoading = !data && !error
    const populars = data

    return {
        populars,
        isLoading
    }
}