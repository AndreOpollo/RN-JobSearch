import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS, FONT, SIZES } from '@/constants';
import { placeholder } from '@/constants/util';

type CompanyInfoProps = {
    companyLogo:string,
    jobTitle:string,
    companyName:string
    location:string
}
const CompanyInfo = ({companyLogo,jobTitle,companyName,location}:CompanyInfoProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
        resizeMode='contain'
        source={{uri:companyLogo||placeholder}}
        style={styles.logo}/>
      </View>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.location}>
            <EvilIcons name='location' size={SIZES.medium+2}/>
            <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    logoContainer:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "white",
        borderRadius: SIZES.large,
        marginBottom: SIZES.large
    },
    logo:{
        height:'100%',
        width:'100%',
        borderRadius:SIZES.large
    },
    jobTitle:{
        fontFamily: FONT.bold,
        fontSize:SIZES.large,
        color:COLORS.primary,
        marginBottom:SIZES.small,
        textAlign:'center'
    },
    locationContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    companyName:{
        fontFamily:FONT.medium,
        color:COLORS.primary,
        fontSize:SIZES.medium - 2
    },
    location:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    locationLogo:{

    },
    locationName:{
        fontFamily: FONT.regular,
        color: COLORS.secondary,
        fontSize:SIZES.medium - 2
    }
})

export default CompanyInfo