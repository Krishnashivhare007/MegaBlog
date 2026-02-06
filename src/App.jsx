import conf from './conf/conf';
import './App.css'
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice';
import {Header} from './components';
import { Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);//isme issue aayega
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser().then((user)=>{
      if(user!==null){
        dispatch(login({user}));
      }else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false));
  },[dispatch])

  if(!loading){
    return (
      <div className="min-h-screen flex flex-wrap items-center justify-center content-between bg-gray-500">
        <div className='w-full block'>
          <Header/>
          <main>
            TODO: {/* <Outlet/> */}
          </main>
          <Footer/>
        </div>
      <h1>MegaBlog</h1>
    </div>
    )
  }
  return 
}

export default App
