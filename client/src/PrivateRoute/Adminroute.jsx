import React, { useState,useEffect } from 'react'
import {Outlet} from "react-router-dom"
import { useAuth } from '../component/Usercontext'
import axios from 'axios'

const Adminroute = () => {
    const [ok,setok] =useState(false);
    const [userauth,setuserauth]=useAuth();

    useEffect(()=>{
        const authcheck =async()=>{
            const res=await axios.get(`/adminverify`);
            if(res.data.ok){
                setok(true);
            }
            else{
                setok(false);
            }}
            if(userauth?.token)authcheck();
    },[userauth?.token]);



  return (
    <div>
        {ok ? <Outlet/>:"loading..."}
    </div>
  )
}

export default Adminroute