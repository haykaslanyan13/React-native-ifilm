import {StyleSheet} from "react-native";


export const topMovieCardStyles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    movie_img: {
        height: 160,
        width: 100
    },
    description_container: {
        padding: 5
    },
    name: {
        color: '#eee',
        fontWeight: '700',
        fontSize: 15,
        maxWidth: 250
    },
    description_label: {
        color: '#eee',
        fontSize: 12
    },
    description_value: {
        fontSize: 13,
        fontWeight: '700'
    },
    rating: {
        backgroundColor: '#fe7900',
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontWeight: '700',
        color: '#eee',
        fontSize: 16
    },
})
