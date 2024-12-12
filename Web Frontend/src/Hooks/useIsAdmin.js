import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'


const useIsAdmin = () => {
    const [isAdmin , setIsAdmin] = useState(Cookies.get('user'));

    useEffect(()=>{
        setIsAdmin(Cookies.get('user'))
    },[Cookies.get('user')])


    if(!isAdmin) return [false , null]

    if(JSON.parse(isAdmin).role == 'ADMIN') return [true , JSON.parse(isAdmin)]
    
    return [false , null]
}

export default useIsAdmin
