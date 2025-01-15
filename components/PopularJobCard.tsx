import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '@/constants'

type PopularJobCardProps = {
    item?:any,
    selectedJob?:string,
    handlePressCard:(item:any)=>void
}
const PopularJobCard = ({item,selectedJob,handlePressCard}:PopularJobCardProps) => {
  return (
    <TouchableOpacity 
    onPress={()=>handlePressCard(item)}
    style={[styles.container,
        selectedJob===item.id && {backgroundColor:COLORS.primary}
    ]}>
        <View style={styles.logoContainer}>
            <Image 
            resizeMode='contain'
            source={item?.logo}
            style={styles.logo}/>
        </View>
        <Text style={styles.companyName}>{item?.company}</Text>
        <View style={styles.infoContainer}>
            <Text style={[styles.jobTitle,
                selectedJob === item.id && {color:'white'}
            ]}>{item?.jobTitle}</Text>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.salary,
                    selectedJob === item.id && {color:'white'}
                ]}>{item?.salary} - </Text>
                <Text style={styles.location}>{item?.location}</Text>
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
    salary:{
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