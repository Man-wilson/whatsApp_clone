import { StyleSheet, Text, View,} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MainNavigation } from './MainNavigation';
import React from 'react'
import { Detail } from '../components/cards/Detail';
import { ChatScreen } from '../components/Layout/ChatScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Feather, Entypo, EvilIcons  } from '@expo/vector-icons';
import { MainAppNavigation } from './MainAppNavigation';



const Header = () => {
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


const Stack = createNativeStackNavigator();


const {Navigator, Screen} = Stack

export const AppNavigation = () => {
  return (
    <Navigator screenOptions={{
        headerShown: false,
      }}>
         {/* <Screen name='Home' component={Header} />
          <Screen name='MainNavs' component={MainNavigation} /> */}
          <Screen name='Home' component={MainAppNavigation} />
          <Screen name='Detail' component={Detail} />
          <Screen name='chatscreen' component={ChatScreen} />
      </Navigator>
  )
}


const styles = StyleSheet.create({})