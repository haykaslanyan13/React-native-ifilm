import useSWR from "swr";
import {API_KEY} from "../../env";
import {getTopRatedMovies} from "../../services/api/genres";
import { stringifyURL } from "../../utils/query";

interface useTopRatedMoviesProps {
    topRatedMovies: any
    isLoading: boolean
}

interface IProps {
    language: string
    page: number
}

export const useTopRatedMovies = ( { language, page }: IProps ): useTopRatedMoviesProps => {
    const params = {
        api_key: API_KEY,
        language,
        page
    }

    const { data, error } = useSWR(stringifyURL('movie/top_rated', params), getTopRatedMovies)

    const isLoading = !data && !error
    const topRatedMovies = data || {}

    return {
        topRatedMovies,
        isLoading
    }
}