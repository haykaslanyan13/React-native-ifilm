import {StyleSheet} from "react-native";

export const filmsStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    card: {
        marginHorizontal: 9,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        minWidth: 160,
        maxWidth: 180,
        width: 170,
        height: 300,
        marginBottom: 10
    },
    title: {
        maxWidth: 150,
        fontFamily: 'sans-serif',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5
    }
})