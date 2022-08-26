import api from "../../managers/api.manager";

export async function getMovieList (url: string) {
    const response = await api.get(url)
    return response.data
}

export async function getMovie (url: string) {
    const response = await api.get(url)
    return response.data
}

export async function getPopulars (url: string) {
    const response = await api.get(url)
    return response.data
}

export async function getTopRatedMovies (url: string) {
    const response = await api.get(url)
    return response.data
}