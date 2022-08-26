import {StyleSheet} from "react-native";

const slideshowStyles = (props?: any) => StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: 350,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative'
    },
    arrow: {
        position: 'absolute',
        zIndex: 1,
        top: '45%',
        [props?.side == 'left' ? 'left' : 'right']: 0,
    },
    arrowSVG: {
        width: 40,
        height: 30,
        tintColor: `${props?.disableArrow ? 'rgba(238, 238, 238, 0.2)' : 'white'}`,
    },
    image: {
        height: 300
    },
    w_45: {
        width: '45%',
    }
})

export default slideshowStyles
export const stylesWithoutProps =  slideshowStyles()
