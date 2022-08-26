import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ReactElement, useState} from "react";
import {useTopRatedMovies} from "../../hooks/api/useTopRatedMovies";
import {useSelector} from "react-redux";
import { useWindowDimensions } from 'react-native';
import TopMovieCard from "../Top-movie-card/top-movie-card.component";
import {topMoviesStyles as styles, topMoviesStylesWithoutProps as stylesWithoutProps} from "./top.movies.styles";

const TopMovies = () => {
    const { width } = useWindowDimensions();
    const language = useSelector((state: any) => state.language.language)
    const [random, setRandom] = useState(Math.floor(Math.random() * 500))
    const { topRatedMovies } = useTopRatedMovies({
        language,
        page: random
    })

    const renderItem  = ({ item }: any): ReactElement<any,any> => {
        return (
            <ScrollView style={stylesWithoutProps.card}>
               <TopMovieCard movie={item} />
            </ScrollView>
        )
    }

    return (
       <ScrollView style={stylesWithoutProps.container} horizontal={true}>
               <View>
                    <View style={styles({width}).header_container}>
                       <Text style={stylesWithoutProps.header}>Top Movies</Text>
                       <TouchableOpacity onPress={() => {
                           setRandom(Math.floor(Math.random() * 500))
                       }}>
                           <Image
                               style={stylesWithoutProps.refresh_icon}
                               source={require('../../assets/icons/refresh.png')} />
                       </TouchableOpacity>
                   </View>
                   <View style={stylesWithoutProps.card_container}>
                       <FlatList
                           data={topRatedMovies?.results}
                           renderItem={renderItem}
                           keyExtractor={(item, index) => index.toString()}
                       />
                   </View>
               </View>

       </ScrollView>
    )
}

export default TopMovies