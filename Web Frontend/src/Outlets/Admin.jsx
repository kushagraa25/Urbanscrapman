import React, { useEffect } from 'react'
import useIsAdmin from '../Hooks/useIsAdmin'
import { Outlet,  useNavigate } from 'react-router-dom'
import Sidebar from '../Admin/Sidebar';
const Admin = () => {
    const [isAdmin , adminData] = useIsAdmin();
    const navigate = useNavigate();

    useEffect(()=>{
      if(!isAdmin){ 
        return navigate('/');
      }
    },[])
  return (
    <>
    <Sidebar />
    <Outlet />
    </>
  )
}

export default Admin
