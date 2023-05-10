import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider} from 'react-native-safe-area-context'
import { HeaderScreen } from '../screens/HeaderScreen'
import { AppNavigation } from './AppNavigation'
import React from 'react'




export const RootNavigation = () => {
    
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <HeaderScreen/> */}
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({})