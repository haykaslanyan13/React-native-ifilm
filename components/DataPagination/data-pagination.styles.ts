import {StyleSheet} from "react-native";

export const dataPaginationStyles = (props?: any) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '50%'
    },
    arrow: {
        width: 15,
        height: 15,
        tintColor: props?.disableArrow ? 'orange' : '#CCCCCC'
    }
})

export const dataPaginationStylesWithoutProps = dataPaginationStyles()