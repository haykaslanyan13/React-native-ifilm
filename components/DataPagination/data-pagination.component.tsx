import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
// @ts-ignore:next-line
// @ts-ignore
import Dots from 'react-native-dots-pagination';
import {dataPaginationStyles as styles, dataPaginationStylesWithoutProps as stylesWithoutProps} from "./data-pagination.styles";

interface DataPagination {
    page: number,
    maxPage: number
    setPage: (page: number) => void
}

const DataPagination = ({page, setPage, maxPage}: DataPagination) => {

    return (
        <View style={stylesWithoutProps.container}>
            <TouchableOpacity
                disabled={(page - 1) < 0}
                onPress={() => {
                    (page - 1) >= 0 && setPage(page - 1)
                }}
            >
                <Image
                    style={styles({disableArrow: !((page - 1) < 0) }).arrow}
                    source={require('../../assets/icons/arrow-left.png')}
                />
            </TouchableOpacity>
            <Dots
                active={page}
                length={maxPage}
                activeColor={'orange'}
                passiveColor={'#CCCCCC'}
                width={150}/>
            <TouchableOpacity
                disabled={(page + 2) > maxPage}
                onPress={() => {
                (page + 2) <= maxPage &&  setPage(page + 1)
            }}
            >
                <Image
                    style={styles({disableArrow: !((page + 2) > maxPage) }).arrow}
                    source={require('../../assets/icons/arrow-right.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

export default DataPagination