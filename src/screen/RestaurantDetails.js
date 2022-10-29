import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'

export default function RestaurantDetails() {

    const img_url = "https://s3-media4.fl.yelpcdn.com/bphoto/7BcH3pDde3hQRKtFbwpWVw/o.jpg";
    return (
        <>
            <RestaurantImage img_url={img_url} />
            <RestaurantTitle />
            <RestaurantDesc />
            <View style={{ borderWidth: 2, marginTop: 10, borderColor: 'grey' }} />
            <RestaurantItems />
        </>
    )
}


const RestaurantImage = (props) => {
    return (
        <View>
            <StatusBar translucent backgroundColor='transparent' />
            <Image source={{ uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/7BcH3pDde3hQRKtFbwpWVw/o.jpg' }} style={{ width: "100%", height: 200 }} />
        </View>
    )
}

const RestaurantTitle = () => {
    return (
        <Text style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15
        }}>Yardbird</Text>
    )
}
const RestaurantDesc = () => {
    return (
        <Text style={{
            marginTop: 10,
            marginHorizontal: 15,
            fontWeight: '400'
        }}>Thai - Confirt Food - $$ - 4 - 2222+</Text>
    )
}


const RestaurantItems = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20
        }}>
            <RestaurantItemInfo />
            <RestaurantItemImage />
        </View>
    )
}

const RestaurantItemInfo = (props) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: '900', fontSize: 16 }}>Title </Text>
            <Text>Description</Text>
            <Text>Price</Text>
        </View>
    )
}

const RestaurantItemImage = (props) => {
    return (
        <Image source={{ uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/7BcH3pDde3hQRKtFbwpWVw/o.jpg' }}
            style={{ width: 100, height: 100 }} />
    )
}