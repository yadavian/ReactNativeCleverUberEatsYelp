import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function RestaurantDetailsScreen({ navigation, route }) {

    const { restaurant } = route.params
    console.log(`route.params.restaurant  =>`, route.params.restaurant)
    console.log(`restaurant  =>`, restaurant)
    return (
        <View>
            <RestaurantImage image_url={restaurant.image_url} />
            <RestaurantTitle name={restaurant.name} />
            <RestaurantDesc />
            <View style={{ borderWidth: 2, marginTop: 10, borderColor: 'grey' }} />
            <RestaurantItems />
        </View>
    )
}


const RestaurantImage = (props) => {
    return (
        <View>
            <StatusBar translucent backgroundColor='transparent' />
            <Image source={{ uri: props.image_url }} style={{ width: "100%", height: 200 }} />
        </View>
    )
}

const RestaurantTitle = (props) => {
    return (
        <Text style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15
        }}>{props.name}</Text>
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

    const foods = [
        {
            title: 'Mamledar Misal',
            desc: 'Shop No.2, Ground Floor, Tapovan, Raycon IT Park Rd, Nahur West, Mumbai, Maharashtra 400078',
            price: '35'
        },
        {
            title: 'Bhau Anna ( Puneri Misal)',
            desc: 'Shop Number 3 Varia Cottage, MG Road, near Ambaji Dham, Mulund West, Mumbai, Maharashtra 400080',
            price: '100'
        },
        {
            title: 'Mamledar Misal',
            desc: '5XQ8+JX8, opposite Zilla Parishad, Talav Pali, Naupada, Thane West, Thane, Maharashtra 400602',
            price: '55'
        },
        {
            title: 'Misal pav wala thane',
            desc: 'Jay Shankar Apartment, Lal Bahadur Shastri Rd, Deep Jyoti Society, Bhakti Mandir, Panch Pakhdi, Thane West, Thane, Maharashtra 400602',
            price: '600'
        },
    ]

    return (
        <>
            {foods.map((food, index) => {
                return (
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 20
                    }} key={index}>

                        <BouncyCheckbox
                            size={25}
                            fillColor="red"
                            unfillColor="#FFFFFF"
                            text=""
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={{ fontFamily: "JosefinSans-Regular" }}
                            onPress={(isChecked) => { }}
                        />
                        <RestaurantItemInfo food={food} />
                        <RestaurantItemImage food={food} />
                    </View>
                )
            })}
        </>
    )
}

const RestaurantItemInfo = (props) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: '900', fontSize: 16 }}>{props.food.title} </Text>
            <Text style={{
                width: 200, 
            }}>{props.food.desc}</Text>
            <Text>{props.food.price}</Text>
        </View>
    )
}

const RestaurantItemImage = (props) => {
    return (
        <Image source={{ uri: 'https://s3-media4.fl.yelpcdn.com/bphoto/7BcH3pDde3hQRKtFbwpWVw/o.jpg' }}
            style={{ width: 100, height: 100 }} />
    )
}