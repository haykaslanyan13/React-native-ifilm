import React from "react";
import {Image, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import {IMAGE_BASE_URL} from "../../../env";
import {useMovie} from "../../../hooks/api/useMovie";
import Description from "../../Film-description/description.component";
import {filmStyles as styles} from './film.styles'

const options = [
    {
        label: 'Title',
        value: 'title'
    },
    {
        label: 'Original Name',
        value: 'original_title'
    },
    {
        label: 'Year',
        value: 'release_date'
    },
    {
        label: 'Genres',
        value: 'genres'
    },
    {
        label: 'Duration',
        value: 'runtime'
    },
    {
        label: 'Budget',
        value: 'budget'
    },
]

const FilmComponent = ({ film }: any) => {
    const language = useSelector((state: any) => state.language.language)
    const { movie } = useMovie({
        id: film.id,
        language: language
    })
    return (
       <ScrollView style={styles.container}>
           <Image
               style={styles.image}
               resizeMode={'cover'}
               source={{
                    uri: `${IMAGE_BASE_URL}${movie.poster_path}`
                }}
           />
           <Description movie={movie} options={options} />
           <Description title={'About Film'} description={movie.overview} />
       </ScrollView>
    )
}

export default FilmComponent
