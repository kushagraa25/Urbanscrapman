import './App.css'
import Home from './User/Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Rates from './User/Pages/Rates'
import Login from './Auth/Login'
import NotFound from './User/Pages/NotFound'
import User from './Outlets/User'
import { useEffect, useState } from 'react'
import { Authcontext } from './Auth/Authcontext'
import { ToastContainer , Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import useIsAdmin from './Hooks/useIsAdmin'
import Admin from './Outlets/Admin'
import AllShedules from './Admin/AllShedules'
import Scrabs from './Admin/Scrabs'
import ScrollToTop from './User/Component/ScrollToTop/ScrollToTop'
import Faq from './User/Pages/Faq'
import TandC from './User/Pages/TandC'
import Privacy from './User/Pages/Privacypolicy'



function App() {
  const IsAdmin = useIsAdmin()
  const [isLogedIn, setIsLogedIn] = useState(Cookies.get('isloggedIn') || false)

  useEffect(() => {
    console.log(IsAdmin)
    setIsLogedIn(Cookies.get('isloggedIn') || false)
  }, [isLogedIn])

  return (
    <Authcontext.Provider value={{ isLogedIn, setIsLogedIn }}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<User />}>
            <Route path='/' element={<Home />} />
            <Route path='/rates' element={<Rates />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/tandc' element={<TandC />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='/admin' element={<Admin />}>
            <Route path='/admin/shedule' element={<AllShedules />} />
            <Route path='/admin/scrabs' element={<Scrabs />} />
          </Route>
        </Routes>
      </Router>
    </Authcontext.Provider>
  )
}

export default App
