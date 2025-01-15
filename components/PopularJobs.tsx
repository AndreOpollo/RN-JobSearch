import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT, SIZES } from '@/constants'
import {FlashList} from '@shopify/flash-list'
import PopularJobCard from './PopularJobCard'

const PopularJobs = () => {
 const data = Array.from({length:20},(_,index)=>({
    id:index.toString(),
    logo:require('@/assets/images/google-logo.png'),
    company:'Google',
    jobTitle: 'Senior Android Engineer',
    salary:'$8k',
    location:'Tokyo, Japan'
 }))
 const [selectedJob,setSelectedJob]=useState()
 const handleCardPress = (item:any)=>{
    setSelectedJob(item.id)
 }
return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Job</Text>
        <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
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
        keyExtractor={(item)=>item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
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