import { Text, View} from "react-native";
import moment from "moment";
import React, {useCallback, useMemo} from "react";
import { descriptionStyles, descriptionStylesWithoutProps, AboutDescriptionStyles } from "./description.styles";

interface descriptionComponentProps {
    options: any[]
    movie: any
    title?: string
    description?: string
}

interface AboutDescriptionComponentProps {
    options?: any[]
    movie?: any
    title: string
    description: string
}

const DescriptionComponent = ( { options, movie, title, description }: descriptionComponentProps | AboutDescriptionComponentProps ) => {
    const styles = descriptionStyles
    const stylesWithoutProps = movie ? descriptionStylesWithoutProps : AboutDescriptionStyles

    const getGenres = useCallback((genresArray: any[]) => {
        const genresStr = genresArray?.reduce((acc: string, genre: any) => {
            acc += genre?.name + ', '
            return acc
        }, "")

        return genresStr?.substr(0,genresStr.length - 2)

    },[movie])

    const getDescription = useCallback( (optionValue: string) => {
        return  optionValue == 'release_date' ?
            moment(movie?.[optionValue]).format('YYYY') :
            optionValue == 'genres' ?
                getGenres(movie?.[optionValue]) :
                optionValue == 'runtime' ?
                    `${movie?.[optionValue]}m.` :
                    optionValue == 'budget' ?
                     `${movie?.[optionValue]}$` :
                    movie?.[optionValue]
    },[movie])

    return  movie ? (
        <View>
            {options?.map((option: {label: string, value: string}, index: number) =>  (
            <View
                key={`${Math.random()}-${index}`}
                style={styles({index}).container}>
                <Text style={stylesWithoutProps.title}>{option.label}: </Text>
                <Text style={stylesWithoutProps.description}>{
                    getDescription(option.value)
                }</Text>
            </View>
        ))}
        </View>
    ) : (
        <View
            style={stylesWithoutProps.container}>
            <Text style={stylesWithoutProps.title}>{title}: </Text>
            <Text style={stylesWithoutProps.description}>{description}</Text>
        </View>
    )

}

export default DescriptionComponent
