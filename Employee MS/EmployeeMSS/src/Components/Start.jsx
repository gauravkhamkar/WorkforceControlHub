import axios from 'axios';
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



const Start = () => {
   const navigate = useNavigate();

    useEffect(() =>{
       axios.get('http://localhost:3000/verify')
       .then(result =>{
         if(result.data.Status){
          if(result.data.role=="admin"){
             navigate('/dashboard')
          }
          else{
            navigate('/employee_detail/'+result.data.id)
          }
         }
        
       }).catch(err => console.log(err))
    },[])
   
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-25  border loginForm shadow'>
        
        <h2 className='text-center'>Sign As</h2>
        <div className='d-flex justify-content-between mt-2 mb-2 '>
           <button type="button"  className='btn btn-primary mt-8 shadow ' onClick={()=>{navigate('/employee_login')}}>Employee</button>
           <button type="button"  className='btn btn-success mt-8 shadow '  onClick={()=>{navigate('/adminlogin')}}>Admin</button>
        </div>
        
    </div>
</div>
  )
}

export default Start