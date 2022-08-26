import {FlatList, Image, Pressable, Text, TouchableOpacity, View} from "react-native";
import React, {ReactElement, useState} from "react";
import styles from './dropdown.styles'

interface DropdownProps {
    value?: { label: string; value: string };
    data: Array<{ label: string; value: string }>;
    onSelect?: (item: { label: string; value: string }) => void;
}

const DropdownComponent = ({ data, value, onSelect }: DropdownProps) => {
    const [visible,setVisible] = useState(false)
    const [selectedItem,setSelectedItem] = useState<any>(value || { label: 'Select', value: null })

    const renderItem = ({ item }: any): ReactElement<any, any> => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    const onItemPress = (item: any): void => {
        setSelectedItem(item)
        onSelect && onSelect(item)
        setVisible(!visible)
    };

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.label}>
                    {selectedItem.label}
                </Text>
                <Pressable onPressOut={() => {}} onPress={() => {
                    setVisible(!visible)
                }}>
                    {!visible ? (
                        <Image style={styles.icon} source={require('../../assets/icons/down-arrow.png')}/>
                    ) : (
                        <Image style={styles.icon} source={require('../../assets/icons/arrow-up.png')}/>
                    )}
                </Pressable>
            </View>
            {visible && (
                <View style={styles.dropdown}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            )}
        </View>
    )
}

export default DropdownComponent