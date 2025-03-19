import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../constant'

interface SearchProps {
    placeholder: string;
    onPress?: () => void;
    value: string,
    onChangeText: (text: string) => void
}
const Searchbar = ({ placeholder, onPress, value, onChangeText }: SearchProps) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={IMAGES.search} className='size-5' resizeMode='contain' tintColor='#ab8bff' />
            <TextInput placeholder={placeholder} value={value} onPress={onPress} onChangeText={onChangeText} placeholderTextColor='#a8b5db' className='flex-1 ml-2 text-white' />
        </View>
    )
}

export default Searchbar

const styles = StyleSheet.create({})