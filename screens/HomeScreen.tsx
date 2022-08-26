import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {usePopulars} from "../hooks/api/genres/usePopulars";
import usePagination from "../hooks/usePagination";
import Films from '../components/Films/films.component'
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Populars from "../components/Populars/populars.component";
import TopMovies from "../components/Top-movies/top-movies.component";


const HomeScreen = () => {
    const { page, onPage } = usePagination()
    const language = useSelector((state: RootState) => state.language.language)
    const { populars, isLoading } = usePopulars({
        language: language.value,
        page: page + 1
    })

    return (
           <ScrollView nestedScrollEnabled={true}>
               <View style={styles.container}>
                   <Populars />
                   { !isLoading && (
                       <Films page={page} setPage={onPage} data={populars?.results} />
                   )}
               </View>
               <TopMovies />
           </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    }
})

export default HomeScreen