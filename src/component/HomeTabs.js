import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HomeTabs() {

  const [activeTab, setActiveTab] = useState("Pickup")

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" textColor="black" backColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton text="Pickup" textColor="white" backColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  )
}


const HeaderButton = (props) => {
  return <>
    <TouchableOpacity
      onPress={() => props.setActiveTab(props.text)}
      style={{
        backgroundColor: props.activeTab == props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 10
      }}>
      <Text style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900"
      }}>{props.text}</Text>
    </TouchableOpacity>
  </>
}