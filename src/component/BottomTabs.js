import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

export default function BottomTabs() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
            <Icon icon="home" text='home' />
            <Icon icon="search" text='search' />
            <Icon icon="shopping-bag" text='shopping-bag' />
            <Icon icon="receipt" text='receipt' />
            <Icon icon="user" text='user' />
        </View>
    )
}

const Icon = (props) => {
    return (
        <FontAwesome5
            name={props.icon}
            size={25}
        />
    )
}

