import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '@/constants'

const Section = ({title,points}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView style={styles.points} showsVerticalScrollIndicator={false}>
        {points.map((item:any,index:any)=>(
            <View 
            style={styles.pointContainer}
            key={index}>
                <View style={styles.pointDot}/>
                <Text style={styles.point}>{item}</Text>
            </View>
        ))

        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:SIZES.large,
        backgroundColor: "white",
        padding: SIZES.medium,
        borderRadius:SIZES.medium,
        height:420
    },
    title:{
        fontFamily:FONT.bold,
        color:COLORS.primary,
        fontSize:SIZES.medium
    },
    points:{
        marginTop:SIZES.large

    },
    pointContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        gap:SIZES.small,
        marginVertical:SIZES.small/2,
        marginHorizontal:SIZES.small,
        paddingHorizontal:SIZES.small
    },
    pointDot:{
        borderRadius:999,
        backgroundColor:COLORS.gray,
        height:5,
        width:5,
        marginTop:6
    },
    point:{
        fontFamily:FONT.regular,
        fontSize:SIZES.medium-2,
        color:COLORS.gray
    }
})

export default Section