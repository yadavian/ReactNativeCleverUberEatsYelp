import { View, Text, SafeAreaView, ScrollView, Button,Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeTabs from '../component/HomeTabs'
import SearchBar from '../component/SearchBar'
import Categories from '../component/Categories'
import Restaurants from '../component/Restaurants'
import BottomTabs from '../component/BottomTabs'

export default function HomeScreen() {

    const [city, setCity] = useState('Las Vegas')
    const [fetchedRestaurant, setFetchedRestaurant] = useState([])

    const getRestaurantsFromYelp = () => {
        const apikey = 'EGsL0fuOuS49IY63hE1-Vyczoanp3BapfCgqvZ881EWjMEI64hGM_uNYCYZq0qDMAFgA5IU9zr86XKdh-k0beedJpm8NeQycv1YU30GvZw9jYZU9cq0_RnrD0SpaY3Yx'
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
        const res = fetch(yelpUrl, {
            method: 'GET',

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${apikey}`
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(`json  =>`, json)
                setFetchedRestaurant(json.businesses)
            });
    }

    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city])


    return (
        <SafeAreaView style={{ flex:1,backgroundColor: "#eee" }}>
                <View style={{flex:0.2}}>
                    <HomeTabs />
                    <SearchBar city={city} setCity={setCity} />
                </View>
                <View style={{ flex:1,padding: 15 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Categories />
                        <Restaurants fetchedRestaurant={fetchedRestaurant} />
                    </ScrollView>
                </View>
                <View style={{ width: "100%", paddingVertical: 5, backgroundColor: "grey" }}>
                    <BottomTabs />
                </View>
        </SafeAreaView>
    )
}