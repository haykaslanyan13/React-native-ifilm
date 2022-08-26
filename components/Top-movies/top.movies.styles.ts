import {StyleSheet} from "react-native";

export const topMoviesStyles = (props?: any) => StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'column',
        flex: 1,
        marginBottom: 40
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: props?.width - 20
    },
    card_container: {
        flex: 2
    },
    header: {
        color: 'white',
        fontWeight: "700",
        fontSize: 23
    },
    card: {
        backgroundColor: '#242526',
        height: 160,
        marginVertical: 10,
        position: 'relative'
    },
    refresh_icon: {
        width: 20,
        height: 20,
        tintColor: 'white',
    }
})
export const topMoviesStylesWithoutProps = topMoviesStyles()