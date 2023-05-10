import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs' 
import { Calls } from '../screens/Calls';
import { Chat } from '../screens/Chats';
import { Status } from '../screens/Status';


const Tab = createMaterialTopTabNavigator();

const {Navigator, Screen} = Tab

export const MainNavigation = () => {
  return (
    <Navigator
    // barStyle={{backgroundColor:'red'}}
     screenOptions={{
      headerShown: false,
      tabBarLabelStyle: {fontWeight: "bold", textTransform: "capitalize"},
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "seashell",
      tabBarIndicatorStyle: {backgroundColor: "white", width: 120, height: 3, borderRadius: 5, marginHorizontal: 12},
      tabBarStyle: {
        backgroundColor: "seagreen",
        textTransform: "none"
      }
    }}>
        <Screen name='Chats' component={Chat} />
        <Screen name='Status' component={Status} />
        <Screen name='Calls' component={Calls} />
    </Navigator>
  )
}


const styles = StyleSheet.create({})