// @ts-ignore:next-line
// @ts-ignore
import Stars from 'react-native-stars';
import { Image } from "react-native";
import styles from './star-rating.styles'

interface StarRatingComponentProps {
    disabled?: boolean
    spacing?: number
    count?: number
    defaultValue?: number
    size?: 'small' | 'medium' | 'large'
    emptyStarColor?: string
    fullStarColor?: string
}

const StarRatingComponent = (
    {
        disabled = false,
        spacing = 1,
        count = 5,
        defaultValue = 0,
        size = 'medium',
        emptyStarColor,
        fullStarColor
    }: StarRatingComponentProps) => {
    const PX = size == 'small' ? 13 : size == 'medium' ? 20 : 30

    return (
        <Stars
            emptyStar={
                <Image
                    source={require('../../assets/icons/star-full.png')}
                    style={[styles({PX, emptyStarColor, fullStarColor}).myStarStyle, styles({PX, emptyStarColor, fullStarColor}).myEmptyStarStyle]}
                />
            }
            fullStar={
                <Image
                    source={require('../../assets/icons/star-full.png')}
                    style={[styles({PX, emptyStarColor, fullStarColor}).myStarStyle]}
                />
            }
            halfStar={
                <Image
                    source={require('../../assets/icons/star-half.png')}
                    style={[styles({PX, emptyStarColor, fullStarColor}).myStarStyle]}
                />
            }
            disabled={disabled}
            spacing={spacing}
            display={defaultValue}
            count={count}
        />
    )
}

export default StarRatingComponent