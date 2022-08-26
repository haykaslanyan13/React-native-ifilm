import {StyleSheet} from "react-native";

export const descriptionStyles = (props?: any) => StyleSheet.create({
    container: {
        backgroundColor: props?.index % 2 == 0 ? '#242526' : "black",
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
    },
    title: {
        fontSize: 15,
        color: 'white',
        marginLeft: 16
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'sans-serif',
    }
})

export const AboutDescriptionStyles = StyleSheet.create({
    container: {
        backgroundColor: '#242526',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingBottom: 10
    },
    title: {
        fontSize: 22,
        color: 'white',
        marginLeft: 16
    },
    description: {
        fontSize: 18,
        color: 'white',
        marginLeft: 16,
        fontFamily: 'sans-serif'
    }
})

export const descriptionStylesWithoutProps = descriptionStyles()
