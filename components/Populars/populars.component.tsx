import {View} from "react-native";
import {useSelector} from "react-redux";
import SlideshowComponent from "../Slideshow/slideshow.component";
import {RootState} from "../../store/store";
import {usePopulars} from "../../hooks/api/genres/usePopulars";


const PopularsComponent = () => {
    const language = useSelector((state: RootState) => state.language.language)
    const { populars, isLoading } = usePopulars({
        language: language.value
    })

    return (
        <View>
            {!isLoading && (
                <SlideshowComponent populars={populars}/>
            )}
        </View>
    )
}

export default PopularsComponent