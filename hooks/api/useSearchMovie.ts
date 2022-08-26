import useSWR from "swr";
import { getMovieList } from "../../services/api/genres";
import { stringifyURL } from "../../utils/query";
import { API_KEY } from "../../env";

interface IProps {
    language: string
    searchText: string
    page: number
}

interface useSearchMovie {
    movies: any[]
    isLoading: boolean
}

export const useSearchMovie = ( { language, searchText, page = 1 }: IProps ): useSearchMovie => {
    const params = {
        api_key: API_KEY,
        language,
        query: searchText,
        page: page + 1
    }
    const { data, error} = useSWR(stringifyURL('search/movie', params), getMovieList)

    const movies = data || []
    const isLoading = !data && !error

    return {
        movies,
        isLoading
    }
}