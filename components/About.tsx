import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '@/constants'

const About = ({title,about}:any) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{title}</Text> 
       <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.about}>{about}</Text>
       </ScrollView>
    </View>
  )
}

const styles =  StyleSheet.create({
    container:{
        borderRadius:SIZES.medium,
        padding:SIZES.medium,
        backgroundColor:'white',
        marginTop:SIZES.large,
        height:420
    },
    title:{
        fontFamily:FONT.bold,
        color:COLORS.primary,
        fontSize:SIZES.medium
    },
    about:{
        marginTop:SIZES.xLarge,
        fontFamily:FONT.regular,
        color:COLORS.gray,
        fontSize:SIZES.medium - 2
    }
})

export default About