import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '@/constants'

type NearbyJobCardProps = {
    item: any,
    handleNavigate:()=>void
}
const placeholder = 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
const NearbyJobCard = ({item,handleNavigate}:NearbyJobCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
        <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
                <Image 
                resizeMode='contain'
                source={{uri:item?.employer_logo||placeholder}}
                style={styles.logo}/>
            </View>
            <View style={styles.jobContainer}>
                <Text style={styles.jobTitle} numberOfLines={1}>
                    {item?.job_title.length>25
                    ?item?.job_title.slice(0,25)+'...':
                    item?.job_title}</Text>
                <Text style={styles.jobType}>{item?.job_employment_type}</Text>
            </View>   
        </View>  
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:SIZES.medium,
        padding:SIZES.large,
        marginTop: SIZES.small,
    },
    contentContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:SIZES.small
    },
    logoContainer:{
        height:70,
        width:70,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:SIZES.medium
    },
    logo:{
        width:'80%',
        height:'80%'
    },
    jobContainer:{

    },
    jobTitle:{
        fontFamily:FONT.bold,
        fontSize: SIZES.large - 2,
        color:COLORS.primary

    },
    jobType:{
        fontFamily:FONT.medium,
        fontSize:SIZES.medium,
        color: COLORS.gray
    },
    country:{
        fontFamily:FONT.bold,
        fontSize:SIZES.large - 2,
        color: COLORS.primary
    }
})

export default NearbyJobCard