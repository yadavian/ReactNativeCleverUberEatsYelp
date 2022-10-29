import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default function SearchBar({ city, setCity }) {
    return (
        <View style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: 20
        }}>
            <Icon name="comment" size={30} color="black" />
            <TextInput
                onChange={text => setCity(text)}
                value={city}
                style={{ flex: 8, paddingLeft: 10 }}
                placeholder='Search' />
            <Icon name="search" size={30} color="black" />
        </View>
    )
}