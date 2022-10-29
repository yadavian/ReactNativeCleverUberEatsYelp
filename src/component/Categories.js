import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Categories() {

    const categories_items = [
        {
            image: require("../assets/images/categories/WA_CC_Oct22.jpg"),
            text: "Pick-up"
        },
        {
            image: require("../assets/images/categories/WA_CL_Oct22.jpg"),
            text: "Soft Drinks"
        },
        {
            image: require("../assets/images/categories/WA_HL_Oct22.jpg"),
            text: "Fruits"
        },
        {
            image: require("../assets/images/categories/WA_PayDay_Oct22.jpg"),
            text: "Salad"
        },
        {
            image: require("../assets/images/categories/WA_PL_Oct22.jpg"),
            text: "Pani"
        },
    ]


    // console.log(`categories_items  =>`, categories_items)

    return (
        <ScrollView horizontal>
            {categories_items.map((categories_item, i) => {
                return (
                    <View key={i}
                        style={{
                            alignItems: 'center',
                            marginRight: 30,
                            paddingVertical: 20,
                        }}>
                        <Image
                            source={categories_item.image}
                            style={{
                                height: 40,
                                width: 50,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: '900' }}>{categories_item.text}</Text>
                    </View>
                )
            })}
        </ScrollView>
    )
}

    