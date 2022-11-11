import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function Restaurants({ navigation, fetchedRestaurant }) {
  return (
    <>
      {fetchedRestaurant?.map((restaurant, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            style={{ marginBottom: 30 }}
            onPress={() => navigation.navigate('RestaurantDetailsScreen', {restaurant})}>
            <View style={{ Top: 10, padding: 15, backgroundColor: 'white' }}>
              <ResturantImage restaurant={restaurant} />
              <ResturantInfo restaurant={restaurant} />
            </View>
          </TouchableOpacity >
        )
      })}

    </>

  )
}



const ResturantImage = ({ restaurant }) => {
  return (
    <View>
      <Image source={{ uri: restaurant.image_url }}
        style={{
          height: 180,
          width: '100%'
        }}
      />
      <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  )

}
const ResturantInfo = ({ restaurant }) => {
  return <>
    <View style={{
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center'
    }}>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{restaurant.name}</Text>
        <Text style={{ ffontSize: 13, color: 'grey' }}>30-45 * min</Text>
      </View>
      <Text>{restaurant.rating}</Text>
    </View>
  </>
}