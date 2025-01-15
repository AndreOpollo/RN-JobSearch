import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { COLORS, FONT, SIZES } from '@/constants'
import {FlashList} from '@shopify/flash-list'
import PopularJobCard from './PopularJobCard'
import useFetch from '@/hook/useFetch'
import { useLocalSearchParams, useRouter } from 'expo-router'

const PopularJobs = () => {
 const router = useRouter()   
 const{isLoading,data,error}=useFetch("search",{
  query:'Android',
  num_pages:1
 })
 const params = useLocalSearchParams()
 const [selectedJob, setSelectedJob] = useState<string>(params?.selected as string || "")
//  const handleCardPress = (item:any)=>{
//     if(item?.job_id){
//         setSelectedJob(item.job_id)
//         console.log('Changing selected job',item.job_id)
//         router.push({
//             pathname:'/details/[id]',
//             params:{
//                 id:item?.job_id,
//             selected:item?.job_id}
//         })}
     

// }
const handleCardPress = useCallback((item: any) => {
    if (item?.job_id) {
        setSelectedJob(item.job_id)
      router.push({
        pathname: '/details/[id]',
        params: {id: item?.job_id}
      })
    }
  }, [])


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