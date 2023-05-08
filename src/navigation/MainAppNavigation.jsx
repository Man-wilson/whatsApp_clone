import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderScreen } from '../screens/Header'
import { MainNavigation } from './MainNavigation'

export const MainAppNavigation = () => {
  return (
    <View style={{flex: 1}}>
        <HeaderScreen />
        <MainNavigation />
    </View>
  )
}


const styles = StyleSheet.create({})