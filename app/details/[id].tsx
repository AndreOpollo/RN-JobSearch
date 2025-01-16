import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { act, useEffect, useState } from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { COLORS, FONT, SIZES } from '@/constants'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import CompanyInfo from '@/components/CompanyInfo'
import useFetch from '@/hook/useFetch'
import Section from '@/components/Section'
import About from '@/components/About'
import Footer from '@/components/Footer'


interface JobDetails {
    employer_logo: string,
    employer_name: string,
    job_location: string,
    job_title: string,
    job_highlights:{
        Qualifications:[],
        Responsibilities:[]
    },
    job_description:string    
  }
  
  // Define the structure of the API response
  interface ApiResponse {
    data: JobDetails[];
    isLoading: boolean;
    error: string | null;
  }
const Details = () => {
  const {id} = useLocalSearchParams()
  const router = useRouter()
  const {isLoading,error,data = [] as JobDetails[]} = useFetch("job-details",{
    job_id:`${id}`
  }
  ) 
  const tabs = ['Qualifications','Responsibilities','About'] 
  const [activeTab,setActiveTab] = useState(tabs[0])
  const handleTab = (item:any)=>{
    setActiveTab(item)
  }
  const displayTabContent=()=>{
    switch(activeTab){
        case 'Qualifications':
            return (
                <Section title='Qualifications' points={data[0]?.job_highlights?.Qualifications??['N/A']}/>
            )
        case 'Responsibilities':
            return (
                <Section title='Responsibilities' points={data[0]?.job_highlights?.Responsibilities??['N/A']}/>
            )
        case 'About':
            return  (
                <About title='About' about={data[0]?.job_description??['N/A']}/>
            )      
    }
  }
  return (
    <View style={styles.container}>
       <StatusBar translucent={true}/>
       <Stack.Screen options={{
        title:'',
        headerBackVisible:false,
        headerShadowVisible:false,
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerLeft:()=>(
            <TouchableOpacity onPress={()=>router.back()}>
                  <Ionicons name='arrow-back' size={SIZES.xLarge} style={styles.headers}/>   
            </TouchableOpacity>
                   
        ),
        headerRight:()=>(
            <Entypo name='share' size={SIZES.xLarge} style={styles.headers}/>
        )
       }}/> 
       <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contentContainer}>
                {isLoading?(
                    <ActivityIndicator size={'large'} color={COLORS.primary}/>
                ):error?(
                    <Text>Something Went Wrong!</Text>
                ):(
                <CompanyInfo 
                companyLogo={data[0]?.employer_logo}
                companyName={data[0]?.employer_name}
                location={data[0]?.job_location}
                jobTitle={data[0]?.job_title}                
                />)}
                <View style={styles.tabContainer}>
                {tabs.map((item,index)=>(
                    <TouchableOpacity 
                    key={index} 
                    onPress={()=>handleTab(item)}
                    style={[styles.tabBtn,
                        activeTab === item && {backgroundColor:COLORS.primary}
                    ]}>
                        <Text style={[styles.tabText,
                            activeTab === item && {color:COLORS.white}
                        ]}>{item}</Text>
                    </TouchableOpacity>
                ))
                }
                </View>
                {displayTabContent()}
                <Footer/>
            </View>
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    headers:{
        backgroundColor:COLORS.white,
        padding:SIZES.xSmall,
        borderRadius:SIZES.medium
    },
    contentContainer:{
        padding: SIZES.medium,
    },
    tabContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:SIZES.large,
        gap:SIZES.medium,
    },
    tabBtn:{
        padding:SIZES.medium,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.large
    },
    tabText:{
        fontFamily:FONT.medium,
        textAlign:'center',
        color:COLORS.gray
    }
})

export default Details