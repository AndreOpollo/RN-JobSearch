import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES} from '@/constants'
import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Welcome from '@/components/Welcome'
import PopularJobs from '@/components/PopularJobs'
import NearbyJobs from '@/components/NearbyJobs'

export default function Home() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");
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
            <Welcome 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            handleClick={()=>{
              if(searchTerm){
                router.push({
                  pathname:'/search/[id]',
                  params:{
                    id:searchTerm
                  }
                })
              }
            }
            }/>
            <PopularJobs/>
            <NearbyJobs/>
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