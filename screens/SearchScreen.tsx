import {Text, View} from "react-native";

const SearchScreen = ({ navigation }: any) => {
    return(
        <View>
            <Text onPress={() => {
                navigation.navigate('Home')
            }}>
                Search Screen
            </Text>
        </View>
    )
}

export default SearchScreen