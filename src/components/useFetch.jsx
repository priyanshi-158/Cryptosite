import { useEffect, useState } from "react";


export default function useFetch(url,options){
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch(url,options).then(response=>response.json())
        .then(response=>setData(response))
        .catch(err=>setError(err))
        setLoading(false)
    },[url])
    return { data, error, loading }
}