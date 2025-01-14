import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import React from 'react'
import { COLORS, SIZES} from '@/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <View style={styles.container}>
        <StatusBar translucent={true} />
      <Stack.Screen options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft:()=>(
            <MaterialIcons name='menu' size={SIZES.xLarge} style={styles.headerLeft}/>
        ),
        headerRight:()=>(
            <Image 
            source={require('../assets/images/leclerc.jpeg')}
            resizeMode='cover'
            style={styles.headerRight}/>
        ),
        headerTitle:''
      }}/>
      <ScrollView 
      showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
            <Welcome/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: COLORS.lightWhite
  },
  headerLeft:{
    padding: SIZES.xSmall,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small
  },
  headerRight:{
    height:40,
    width:40,
    borderRadius: SIZES.small
  },
  contentContainer:{
    flex:1,
    padding:SIZES.medium
  }
})