import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Entypo, EvilIcons  } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export const HeaderScreen = () => {
  return (
  <SafeAreaView>
    <StatusBar backgroundColor='seagreen' style='light' />
    <View style={{backgroundColor:'seagreen',paddingTop:20, paddingBottom:20, flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{ fontSize:23,paddingLeft:15, fontWeight:'600', color:'white'}}>WhatsApp</Text>
      <View style={{flexDirection:'row',}}>
        <View style={{paddingRight:20}}>
          <Feather name="camera" size={24} color="white" />
        </View>
        <View style={{paddingRight:20}}>
          <EvilIcons name="search" size={27} color="white" />
        </View>
        <View style={{paddingRight:10}}>
          <Entypo name="dots-three-vertical" size={20} color="white" />
        </View>
      </View>
    </View>
  </SafeAreaView>
    
  )
}