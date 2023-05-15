import React, { useState,useEffect,createContext } from 'react'
import {auth} from '../firebase'
import {onAuthStateChanged} from 'firebase/auth'


export  const UserContext = createContext(null);

export  function UserProvider({ children }) {
   
    const [authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        })
        return listen;
    },[])

  return (
    <UserContext.Provider value={{authUser,setAuthUser}} >
        {children}
    </UserContext.Provider>
  )
}
