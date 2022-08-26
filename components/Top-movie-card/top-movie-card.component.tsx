import {Image, Text, TouchableOpacity, View} from "react-native";
import {IMAGE_BASE_URL} from "../../env";
import {topMovieCardStyles as styles} from "./top-movie-card.styles";
import moment from "moment";
import {navigate} from "../../navigation/RootNavigation";
import { Badge } from 'react-native-paper';
interface TopMovieCardProps {
    movie: Record<string | number, any>
}

const TopMovieCard = ({ movie }: TopMovieCardProps) => {
    const date = moment(movie.release_date).format("YYYY")

    return (
        <TouchableOpacity
            onPress={() => {
                navigate("FilmView",{
                    film: movie
                })
            }}
            style={styles.container}>
            <Image style={styles.movie_img} source={{
                uri: `${IMAGE_BASE_URL}${movie.poster_path}`
            }} />
            <View style={styles.description_container}>
                <Text numberOfLines={2} style={styles.name}>{movie.title}</Text>
                <Text style={styles.description_label}>Year: <Text style={styles.description_value}>{date}</Text></Text>
                <Text style={styles.description_label}>Total votes: <Text style={styles.description_value}>{movie.vote_count}</Text></Text>
            </View>

                <Badge size={35} style={styles.rating}>{movie.vote_average}</Badge>

        </TouchableOpacity>
    )
}

export default TopMovieCard