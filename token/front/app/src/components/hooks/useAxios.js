import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(){
    let [data,setData]=useState([]);
    let [error,setError]=useState("");

    useEffect(()=>{
        (async function getusers(){
        try {
            let {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(data)
        } catch (error) {
            setError(error.message)
        }
        })();
    },[]);

    return{
        data,
        error
    }
}

export default useAxios;