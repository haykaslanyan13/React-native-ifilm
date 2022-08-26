import React, {useState} from 'react'
import { Image, Pressable, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'react-native-paper';
import DropdownComponent from "../Dropdown/dropdown.component";
import { RootState } from "../../store/store";
import { changeLanguage } from "../../store/features/language/languageSlice";
import { navigate } from "../../navigation/RootNavigation";
import styles from "./menu-bar.styles";

const MenuBarComponent = () => {
    const language = useSelector(((state: RootState) => state.language.language))
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('')

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                navigate('Home')
            }}>
                <Image style={styles.iFilm} source={require('../../assets/images/ifilm.png')} />
            </Pressable>
            <View style={styles.searchContent}>
                <TextInput
                    placeholder={'Search'}
                    placeholderTextColor={'white'}
                    value={searchText}
                    onChangeText={(text: string) => setSearchText(text)}
                    style={styles.input}
                />
                <Button style={styles.button} buttonColor='#fe7900' compact  textColor={'white'} onPress={() => {
                    navigate('Search',{
                        searchText
                    })
                    setSearchText('')
                }}>Search</Button>
            </View>
            <View >
                <DropdownComponent
                    value={language}
                    onSelect={(item: { label: string, value: string }) => {
                        dispatch(changeLanguage(item))
                    }}
                    data={[
                        { label: 'EN', value: 'en' },
                        { label: 'RU', value: 'ru' },
                    ]}
                />
            </View>
        </View>
    )
}

export default MenuBarComponent