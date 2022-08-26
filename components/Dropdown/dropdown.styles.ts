import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        minWidth: 50
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: 'white'
    },
    icon: {
        width: 15,
        height: 15,
        tintColor: 'white'
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 25,
        width: '100%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    item: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderBottomWidth: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    }
})

export default styles