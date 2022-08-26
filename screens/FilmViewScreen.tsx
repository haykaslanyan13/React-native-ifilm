import {ScrollView} from "react-native";
import Populars from "../components/Populars/populars.component";
import {useRoute} from "@react-navigation/native";
import Film from "../components/Films/Film/film.component";
import TopMovies from "../components/Top-movies/top-movies.component";
import React from "react";

const FilmViewScreen = () => {
    const {params: { film = {}}} = useRoute<any>()

    return(
        <ScrollView>
            <Populars />
            <Film film={film} />
            <TopMovies />
        </ScrollView>
    )
}

export default FilmViewScreen