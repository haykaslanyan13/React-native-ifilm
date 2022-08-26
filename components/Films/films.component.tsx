import React, {ReactElement} from "react";
import {FlatList, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import DataPagination from "../DataPagination/data-pagination.component";
import {IMAGE_BASE_URL} from "../../env";
import StarRating from "../Star-rating/star-rating.component";
import {navigate} from "../../navigation/RootNavigation";
import {filmsStyles as styles} from "./films.styles";

interface FilmsComponentProps {
    data: any
    page: number
    setPage: (page: number) => void
}

const FilmsComponent = ( { data, page, setPage }: FilmsComponentProps ) => {

    const renderItem = ({ item }: any): ReactElement<any, any> => {

        return (
            <View style={styles.card}>
               <TouchableOpacity onPress={() => {
                   navigate('FilmView',{
                       film: item
                   })
               }}>
                   <Image
                       style={styles.image}
                       source={{
                           uri: `${IMAGE_BASE_URL}${item?.poster_path}`
                       }}
                   />
                   <StarRating defaultValue={item.vote_average} count={10} size='small' disabled={true}/>
                   <Text style={styles.title}>{item.title}</Text>
               </TouchableOpacity>
            </View>
        )
    }

    return (
           <ScrollView  horizontal={true}>
               <View  style={styles.container} >
                   <DataPagination setPage={setPage} page={page}  maxPage={15} />
                   <FlatList
                       numColumns={2}
                       data={data}
                       renderItem={renderItem}
                       keyExtractor={( item: any, number: number ) => number.toString()}
                   />
                   <DataPagination setPage={setPage} page={page} maxPage={15} />
               </View>
           </ScrollView>

    )
}

export default FilmsComponent