import {StyleSheet} from "react-native";

const menuBarStyles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 70,
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // marginBottom: 50
    },
    iFilm: {
        width: 120,
        height: 40,
        marginLeft: 10,
    },
    searchContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        color: 'white',
        paddingLeft: 5,
        backgroundColor: 'black',
        borderRadius: 13,
        borderColor: 'white',
        borderWidth: 1,
        width: 100,
        height: 35
    },
    button: {
        width: 80
    }
})

export default menuBarStyles