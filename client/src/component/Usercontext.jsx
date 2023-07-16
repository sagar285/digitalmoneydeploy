import React,{useState,createContext,useEffect, useContext} from "react"
import axios from "axios";

const Authcontext =createContext();
const Usercontext =({children}) =>{
    const [userauth,setuserauth]=useState({
        user:null,token:""
    })

    // default authoriazion
    axios.defaults.headers.common["Authorization"]=userauth?.token;
    useEffect(()=>{
      const userdata =localStorage.getItem("auth")
      if(userdata){
        const parsedata=JSON.parse(userdata)
        setuserauth({...userauth,user:parsedata.usercheck,token:parsedata.token})
      }
    },[])

    return (  
        <Authcontext.Provider value={[userauth,setuserauth]}>
            {children}
        </Authcontext.Provider>
    )

}

const useAuth =()=>useContext(Authcontext);
export {useAuth,Usercontext}