import { useEffect, useState } from "react";
import { juiceService } from '../services/juice';

export function useFetcher(){

    const [juice, setJuice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function getJuice(){
        setLoading(true)
        try{
            const response = await juiceService.getJuice()
            setJuice(response)
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getJuice()
    },[])
    return {juice, loading, error}
}