import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '@/constants'
import { FlashList } from '@shopify/flash-list'
import NearbyJobCard from './NearbyJobCard'
import useFetch from '@/hook/useFetch'

const NearbyJobs = () => {
   
    const {isLoading,data,error} = useFetch("search",{
        query:'Flutter Developer',
        num_pages:1
    })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading?(
            <ActivityIndicator size={'large'} color={COLORS.primary}/>
        ):error?(
            <Text>Something went wrong!</Text>
        ):(
        <FlashList
        data={data}
        renderItem={({item})=>(
            <NearbyJobCard item={item}/>
        )}
        keyExtractor={(item:any)=>item.job_id}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
        />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:SIZES.xLarge
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerTitle:{
        fontFamily:FONT.medium,
        fontSize:SIZES.large,
        color:COLORS.primary
    },
    headerBtn:{

    },
    headerBtnText:{
        fontFamily:FONT.medium,
        fontSize:SIZES.medium,
        color:COLORS.gray
    },
    cardsContainer:{
        height:225      
    }
})

export default NearbyJobs