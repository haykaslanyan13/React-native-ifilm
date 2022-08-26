import useSWR from "swr";
import {API_KEY} from "../../env";
import {getMovie} from "../../services/api/genres";
import {stringifyURL} from "../../utils/query";

interface IProps {
    id: string
    language: string
}

interface useMovie {
    movie: any
    isLoading: boolean
}

export const useMovie = ( { id, language }: IProps): useMovie => {
    const params = {
        api_key: API_KEY,
        language
    }

    const { data, error} = useSWR(stringifyURL(`movie/${id}`,params), getMovie)

    const isLoading = !data && !error
    const movie = data || {}

    return {
        movie,
        isLoading
    }
}