import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '@/constants'
import { FlashList } from '@shopify/flash-list'
import NearbyJobCard from './NearbyJobCard'

const NearbyJobs = () => {
    const data = Array.from({length:20},(_,index)=>({
        id:index.toString(),
        logo:require('@/assets/images/google-logo.png'),
        title:'Senior Designer',
        jobType:'Full-time',
        salary:'$5k'
    }))
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <FlashList
        data={data}
        renderItem={({item})=>(
            <NearbyJobCard item={item}/>
        )}
        keyExtractor={(item)=>item.id}
        estimatedItemSize={50}
        showsVerticalScrollIndicator={false}
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