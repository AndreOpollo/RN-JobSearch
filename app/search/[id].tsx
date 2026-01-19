import NearbyJobCard from "@/components/NearbyJobCard";
import { COLORS, FONT, SIZES } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Search(){
    const params = useLocalSearchParams()
    const router = useRouter()

    const[searchResult,setSearchResult] = useState([])
    const[searchLoader,setSearchLoader] = useState(false)
    const[page,setPage] = useState(1)
    const[searchError,setSearchError] = useState(null)

    const handleSearch = async()=>{
        setSearchLoader(true)
        setSearchResult([])

        try {
            
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '279a0fb786msh4f409731fb82292p1b8eb7jsn9b365c5a1118',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            }

            const response = await axios.request(options)
            setSearchResult(response.data.data)

        } catch (error:any) {
            setSearchError(error)
            console.log(error)
            
        } finally{
            setSearchLoader(false)
        }
    }

    const handlePagination = (direction:'right'|'left') =>{
        if(direction === 'left' && page>1){
            setPage(page-1)
            handleSearch()
        } else if(direction==='right'){
            setPage(page+1)
            handleSearch
        }

    }

    useEffect(()=>{
        handleSearch()
    },[])

    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                     <TouchableOpacity onPress={()=>router.back()}>
                        <Ionicons name='arrow-back' size={SIZES.xLarge} style={styles.headers}/>   
                    </TouchableOpacity>
                ),
                headerTitle:''
            }}/>

            <FlatList
            data={searchResult}
            renderItem={({item}:any)=>(
                <NearbyJobCard 
                item={item}
                handleNavigate={()=>router.push(`/details/${item.job_id}`)}
                />
            )}
            keyExtractor={(item:any)=>item.job_id}
            contentContainerStyle={{padding:SIZES.medium,rowGap:SIZES.medium}}
            ListHeaderComponent={()=>(
                <>
                    <View style={styles.container}>
                        <Text style={styles.searchTitle}>{params.id}</Text>
                        <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                    </View>
                    <View style={styles.loaderContainer}>
                        {searchLoader ? (
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        ) : searchError && (
                            <Text>Oops something went wrong</Text>
                        )}
                    </View>
                </>
            )}
            ListFooterComponent={()=>(
                 <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Ionicons name='chevron-back' style={styles.paginationImage}/>
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                           <Ionicons name='chevron-forward' style={styles.paginationImage}/>
                        </TouchableOpacity>
                    </View>
            )}/>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
     headers:{
        backgroundColor:COLORS.white,
        padding:SIZES.xSmall,
        borderRadius:SIZES.medium
    },
    container: {
        width: "100%",
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        marginTop: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    paginationButton: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary
    }
})