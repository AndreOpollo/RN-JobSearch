import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT, SIZES } from '@/constants'
import Feather from '@expo/vector-icons/Feather'

const Welcome = () => {
  const jobTypes = ['Full-time','Part-time','Contractor'] 
  const[activeJobType,setActiveJobType]=useState("Full-time") 

  return (
    <View>
        <View style={styles.titleContainer}>
            <Text style={styles.username}>Hello Andre</Text>
            <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        </View>
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
                <TextInput
                style={styles.searchBar}
                placeholder='What are you looking for?'
                />
            </View>
            <TouchableOpacity style={styles.searchBtn}>
                <Feather name='search' size={SIZES.large} color={COLORS.white} style={styles.searchIcon}/>
            </TouchableOpacity>        
        </View>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
            {jobTypes.map((job,index)=>(
                <TouchableOpacity 
                key={index}
                style={[styles.jobContainer,
                    activeJobType === job && {borderColor:COLORS.gray2}
                ]}
                onPress={()=>{
                    setActiveJobType(job)
                }}>
                    <Text style={[styles.jobTitle,
                        activeJobType === job && {color:COLORS.secondary}
                    ]}>{job}</Text>
                </TouchableOpacity>
                
            ))

            }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    titleContainer:{
        width:'100%'
    },
    username:{
        fontFamily:FONT.medium,
        fontSize:SIZES.large,
        color: COLORS.secondary
    },
    welcomeMessage:{
        fontFamily:FONT.bold,
        fontSize:SIZES.xLarge,
        color:COLORS.primary,
        marginTop:2
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        marginTop:SIZES.large
    },
    searchWrapper:{
        backgroundColor:COLORS.white,
        borderRadius: SIZES.medium,
        flex:1,
        marginRight:SIZES.small,
        alignItems:'center',
        justifyContent:'center'
    },
    searchBar:{
        fontFamily:FONT.regular,
        width:'100%',
        height:'100%',
        paddingHorizontal:SIZES.medium,
    },
    searchBtn:{
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium
    },
    searchIcon:{
        padding: SIZES.medium
    },
    scrollContainer:{
        marginTop:SIZES.medium,
        width:'100%',
        gap:SIZES.small
    },
    jobContainer:{
        paddingHorizontal: SIZES.small,
        paddingVertical: SIZES.small / 2,
        borderColor:COLORS.gray,
        borderWidth:1,
        borderRadius: SIZES.medium
    },
    jobTitle:{
        fontFamily:FONT.medium,
        color:COLORS.gray
    }
})

export default Welcome