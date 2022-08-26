import {Image, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {IMAGE_BASE_URL} from "../../env";
import styles, {stylesWithoutProps} from "./slideshow.styles";
import {navigate} from "../../navigation/RootNavigation";

const SlideshowComponent = ({populars}: any) => {
    const [activeIndexes,setActiveIndexes] = useState({
        first: 0,
        second: 1
    })

    const hasNext = () => {
        return !!populars?.results?.[activeIndexes.second + 1]
    }

    const hasPrev = () => {
        return !!populars?.results?.[activeIndexes.first - 1]
    }

    const indexChangedObject = (side: string): any => {
        switch (side){
            case 'next' : {
                if(populars.results[activeIndexes.second + 2]){
                    return {
                        first: activeIndexes.first + 2,
                        second: activeIndexes.second + 2
                    }
                }
                else {
                    return {
                        first: activeIndexes.first + 1,
                        second: activeIndexes.second + 1
                    }
                }
            }
            case 'prev' : {
                if(populars.results[activeIndexes.second - 2]){
                    return {
                        first: activeIndexes.first - 2,
                        second: activeIndexes.second - 2
                    }
                }
                else {
                    return {
                        first: activeIndexes.first - 1,
                        second: activeIndexes.second - 1
                    }
                }
            }

        }
    }

    return(
        <View style={stylesWithoutProps.container}>
            {hasPrev() ? (
                <TouchableOpacity
                    style={styles({side: 'left'}).arrow}
                    onPress={() => {
                    setActiveIndexes(indexChangedObject('prev'))
                }}>
                    <Image
                        style={stylesWithoutProps.arrowSVG}
                        source={require('../../assets/icons/arrow-left.png')}
                    />
                </TouchableOpacity>
            ) : (
                <View style={styles({side: 'left'}).arrow}>
                    <Image
                        style={styles({disableArrow: true}).arrowSVG}
                        source={require('../../assets/icons/arrow-left.png')}
                    />
                </View>
            )}
            <View style={stylesWithoutProps.w_45}>
                <TouchableOpacity onPress={() => {
                    navigate('FilmView',{
                        film: populars?.results?.[activeIndexes.first]
                    })
                }}>
                    <Image
                        style={stylesWithoutProps.image}
                        source={{
                            uri: `${IMAGE_BASE_URL}${populars?.results?.[activeIndexes.first].poster_path}`
                        }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>

            <View style={stylesWithoutProps.w_45}>
                <TouchableOpacity onPress={() => {
                    navigate('FilmView',{
                        film: populars?.results?.[activeIndexes.second]
                    })
                }}>
                    <Image
                        style={stylesWithoutProps.image}
                        source={{
                            uri: `${IMAGE_BASE_URL}${populars?.results?.[activeIndexes.second].poster_path}`
                        }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>
            </View>
            {hasNext() ? (
                <TouchableOpacity
                    style={stylesWithoutProps.arrow}
                    onPress={() => {
                    setActiveIndexes(indexChangedObject('next'))
                }}>
                    <Image
                        style={stylesWithoutProps.arrowSVG}
                        source={require('../../assets/icons/arrow-right.png')}
                    />
                </TouchableOpacity>
            ) : (
                <View style={stylesWithoutProps.arrow}>
                    <Image
                        style={styles({disableArrow: true}).arrowSVG}
                        source={require('../../assets/icons/arrow-right.png')}
                    />
                </View>
            )}
        </View>
    )
}

export default SlideshowComponent