import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { COLORS, FONT, SIZES } from '@/constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.favoriteBtn}>
        <Entypo name='heart-outlined' size={SIZES.xLarge} color={COLORS.tertiary}/>        
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        bottom:-30,
        marginHorizontal:SIZES.medium
  },
    favoriteBtn:{
        borderRadius:SIZES.medium,
        padding:SIZES.medium,
        backgroundColor:"white",
        borderColor:COLORS.tertiary,
        borderWidth:1,
        marginRight:SIZES.small 
    },
    applyBtn:{
        backgroundColor:COLORS.tertiary,
        borderRadius:SIZES.medium,
        paddingVertical: SIZES.large,
        paddingHorizontal: SIZES.large,
        flex:2
    },
    applyText:{
        fontFamily:FONT.bold,
        fontSize:SIZES.medium -2,
        color:COLORS.white,
        textAlign:'center'
    }
})