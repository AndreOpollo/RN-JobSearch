import { useEffect, useState } from "react"
import axios from 'axios'

interface ApiResponse {
    data: [];
    isLoading: boolean;
    error: string | null;
  }
const useFetch = (endpoint:string,query:{})=>{
    const[data,setData] = useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[error,setError]=useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
          'x-rapidapi-key': '279a0fb786msh4f409731fb82292p1b8eb7jsn9b365c5a1118',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
    const fetchData = async ()=>{
        setIsLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)            
        } catch (error:any) {
            console.log(error)
            setError(error)            
        } finally{
            setIsLoading(false)
        }
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    
    const refetch = () =>{
        setIsLoading(true)
        fetchData()
    }
    return {data,isLoading,error,refetch}      
}

export default useFetch