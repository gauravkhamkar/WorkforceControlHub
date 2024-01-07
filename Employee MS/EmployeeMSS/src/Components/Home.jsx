import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setemployeeTotal] = useState(0)
  const [salaryTotal, setsalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])

  useEffect(()=>{
      adminCount();
      employeeCount();
      salaryCount();
      AdminRecords();
     
  },[])

  const AdminRecords =()=>{
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result=>{
      if(result.data.Status){
        setAdmins(result.data.Result)
      }
    })
  }

  const adminCount = () =>{
        axios.get('http://localhost:3000/auth/admin_count')
        .then(result=>{
          if(result.data.Status){
            setAdminTotal(result.data.Result[0].admin)
          }
          else{
            alert(result.data.Error)
          }
        })
  }

  const employeeCount = () =>{
    axios.get('http://localhost:3000/auth/employee_count')
    .then(result=>{
      if(result.data.Status){
        setemployeeTotal(result.data.Result[0].employee)
      }
    })
}
const salaryCount = () =>{
  axios.get('http://localhost:3000/auth/salary_count')
  .then(result=>{
    if(result.data.Status){
      setsalaryTotal(result.data.Result[0].salary)
    }
  })
}
  return (
    <div>
    <div className='p-3 d-flex justify-content-around mt-3'>
      <div className='px-3 pt-2 pb-3 border shadow w-25 adminblock'>
        <div className='text-center pb-1'>
          <h4>Admin</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>Total:</h5>
          <h5>{adminTotal}</h5>
        </div>
      </div>
      <div className='px-3 pt-2 pb-3 border shadow w-25'>
        <div className='text-center pb-1'>
          <h4>Employee</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>Total:</h5>
          <h5>{employeeTotal}</h5>
        </div>
      </div>
      <div className='px-3 pt-2 pb-3 border shadow w-25'>
        <div className='text-center pb-1'>
          <h4>Salary</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h5>Total:</h5>
          <h5> ${salaryTotal} </h5>
        </div>
      </div>
    </div>

    {/* List of admin  */}
    <div className='mt-4 px-5 pt-3'>
      <h3>List of Admins</h3>
      <table className='table shadow   custom-rounded-table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            admins.map(a =>(
              <tr>
                <td>{a.email}</td>
                <td>
             < button  className='btn btn-info btn-sm me-2 shadow'>Edit</button>
             <button className='btn btn-warning btn-sm shadow' >
               Delete
             </button>
          
                 </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Home