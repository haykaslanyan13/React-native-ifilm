import {Text, View} from "react-native";
import Populars from "../components/Populars/populars.component";
import {useRoute} from "@react-navigation/native";
import usePagination from "../hooks/usePagination";
import {useSearchMovie} from "../hooks/api/useSearchMovie";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const SearchScreen = () => {
    const {params: { searchText }} = useRoute<any>()
    const { page, onPage } = usePagination()
    const language = useSelector((state: RootState) => state.language.language)
    const { movies } = useSearchMovie({
        language: language.value,
        searchText,
        page
    })

    return(
        <View>
            <Populars />
        </View>
    )
}

export default SearchScreen