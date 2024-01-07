import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result =>{
            setEmployee(result.data[0])
        })
        .catch(err=> console.log(err))
    },[])

    const handleLogout =() =>{
        axios.get('http://localhost:3000/employee/logout')
        .then(result=>{
            if(result.data.Status){
                localStorage.removeItem("valid")
               navigate('/')
            }
        }).catch(err => console.log(err))
    }
  return (
    <div className='employeedetail vh-100'>
        <div className='p-2 d-flex justify-content-center shadow '>
            <h4>WorkForce Control System</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3  '>
            <img src={`http://localhost:3000/Images/`+employee.image} className='emp_det_image rounded-circle shadow'  style={{width: '300px', height: '300px', objectFit: 'cover' }}/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h2>Name: {employee.name}</h2>
                <h3>Email: {employee.email}</h3>
                <h3>Salary: ${employee.salary}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2 shadow'>Edit</button>
                <button className='btn btn-danger  shadow' onClick={handleLogout} >Logout</button>
            </div>
        </div>
    </div>
  )
  
}

export default EmployeeDetail