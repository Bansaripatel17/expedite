import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Logout() {
    const navigate = useNavigate();
    const user = sessionStorage.getItem('user');
  useEffect(() => {
    if(user){
        sessionStorage.removeItem('user');
       return navigate('/login');
    }else{
       return navigate('/login');
    }
  
 
  }, [user])
  
   
  return (
    <div>Logout</div>
  )
}
