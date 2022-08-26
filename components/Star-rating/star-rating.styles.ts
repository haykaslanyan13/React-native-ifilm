import {StyleSheet} from "react-native";

const styles = ({ PX, fullStarColor, emptyStarColor }: any) => StyleSheet.create({
    myStarStyle: {
        tintColor:  fullStarColor || 'orange',
        width: PX,
        height: PX
    },
    myEmptyStarStyle: {
        tintColor:  emptyStarColor || 'rgb(153, 153, 153)',
    }
});

export default styles