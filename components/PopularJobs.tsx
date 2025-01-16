import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { COLORS, FONT, SIZES } from '@/constants'
import {FlashList} from '@shopify/flash-list'
import PopularJobCard from './PopularJobCard'
import useFetch from '@/hook/useFetch'
import { useFocusEffect, useRouter } from 'expo-router'

const PopularJobs = () => {
 const router = useRouter()   
 const{isLoading,data,error,refetch}=useFetch("search",{
  query:'Android',
  num_pages:1
 })
 const [selectedJob, setSelectedJob] = useState('')
 const handleCardPress = (item:any)=>{
    setTimeout(()=>{
        router.push({
            pathname:'/details/[id]',
            params:{
                id:item?.job_id,}
    })
    },100)
        
    setSelectedJob(item.job_id)   

}
useEffect(()=>{
    setSelectedJob("")
},[])



return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Job</Text>
        <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        {isLoading?(
            <ActivityIndicator size={'large'} color={COLORS.primary}/>
        ): error ? (
            <Text>Something Went Wong</Text>
        ):(
        <FlashList 
        data={data}
        renderItem={({item})=>(
     <PopularJobCard
      item={item}
      selectedJob={selectedJob}
      handlePressCard={handleCardPress}
    />
        )}
        estimatedItemSize={50}
        keyExtractor={(item:any)=>item?.job_id}
        horizontal
        showsHorizontalScrollIndicator={false}
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
        color:COLORS.primary,
        fontSize:SIZES.large
    },
    headerBtn:{

    },
    headerBtnText:{
        fontFamily:FONT.medium,
        color:COLORS.gray,
        fontSize:SIZES.medium
    },
    cardContainer:{
        marginTop:SIZES.medium
    },
    list:{
        columnGap:SIZES.medium
    }
})

export default PopularJobs