import { useState , useEffect } from "react"
import Cookies from "js-cookie";

const useIsLoggedIn = () => {
    const [isLoggedIn , SetIsLoggedIn] = useState(Cookies.get('isloggedIn'));
    
        useEffect(()=>{
            SetIsLoggedIn(Cookies.get('isloggedIn'))
        },[Cookies.get('isloggedIn')])
        if(isLoggedIn == 'true') return true
        
        return false
}

export default useIsLoggedIn
