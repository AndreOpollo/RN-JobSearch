import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '@/constants'

type NearbyJobCardProps = {
    item: any
}
const NearbyJobCard = ({item}:NearbyJobCardProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.contentContainer}>
            <View style={styles.logoContainer}>
                <Image 
                resizeMode='contain'
                source={item.logo}
                style={styles.logo}/>
            </View>
            <View style={styles.jobContainer}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.jobType}>{item.jobType}</Text>
            </View>   
        </View>  
        <Text style={styles.salary}>{item.salary}</Text>
    </View>
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
    salary:{
        fontFamily:FONT.bold,
        fontSize:SIZES.large - 2,
        color: COLORS.primary
    }
})

export default NearbyJobCard