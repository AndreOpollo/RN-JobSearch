import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { COLORS, FONT, SIZES } from '@/constants'
import { useFocusEffect } from 'expo-router'

type PopularJobCardProps = {
    item?:any,
    selectedJob?:string,
    handlePressCard:(item:any)=>void
}
const placeholder = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
const PopularJobCard = ({item,selectedJob,handlePressCard}:PopularJobCardProps) => {
    const isSelected = selectedJob === item?.job_id
    
  return (
    <TouchableOpacity 
    onPress={()=>handlePressCard(item)}
    style={[styles.container,
        isSelected&&{backgroundColor:COLORS.primary}
    ]}>
        <View style={styles.logoContainer}>
            <Image 
            resizeMode='contain'
            source={{uri:item?.employer_logo||placeholder}}
            style={styles.logo}/>
        </View>
        <Text style={styles.companyName} numberOfLines={1}>{item?.employer_name}</Text>
        <View style={styles.infoContainer}>
            <Text style={[styles.jobTitle,
                selectedJob === item.job_id && {color:'white'}
            ]} numberOfLines={1}>{item?.job_title}</Text>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.country,
                    selectedJob === item.job_id && {color:'white'}
                ]}>{item?.job_country} - </Text>
                <Text style={styles.location}>{item?.job_location}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:SIZES.medium,
        padding:SIZES.xLarge,
        width:300,
        marginRight:SIZES.medium
    },
    logoContainer:{
        width:50,
        height:50,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.medium
    },
    logo:{
        height:'100%',
        width:'100%'
    },
    companyName:{
        fontFamily:FONT.regular,
        fontSize: SIZES.medium,
        color: "#B3AEC6",
        marginTop:SIZES.small
    },
    infoContainer:{
        marginTop:SIZES.medium,
        gap:SIZES.xSmall - 5
    },
    jobTitle:{
        fontFamily:FONT.medium,
        fontSize:SIZES.medium
    },
    descriptionContainer:{
        flexDirection:'row',
    },
    country:{
        fontFamily:FONT.regular,
        fontSize:SIZES.medium - 2
    },
    location:{
        fontFamily:FONT.regular,
        fontSize: SIZES.medium -2,
        color: "#B3AEC6",

    }
})

export default PopularJobCard