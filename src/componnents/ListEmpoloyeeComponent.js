import React, { useEffect, useState } from 'react'
import EmployeeServices from '../services/EmployeeServices'
import { Link } from 'react-router-dom'


export const ListEmpoloyeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() =>{
        getAllEmployees();
    },[])

    const getAllEmployees = () =>{
        EmployeeServices.getAllEmployees().then((response) =>{
            setEmployees(response.data)
            //console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    const deleteEmployee = (id) =>{
        EmployeeServices.deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error =>{
            console.log(error)
        })
    }

    // function updateEmployee(id){
    //     navigator(`/edit-employee/${id}`);
    // }

  return (
    <div className="container">
        <h2 className="text-center">List of Employees</h2>
        <Link to= "/add-employee" className='btn btn-primary mb-2'> Add Employee</Link>
        {/* <Link to= "/addEmployeeDetails" className='btn btn-primary mb-2'> Add Employee Details</Link> */}
        <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                <th>Employee id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {employees.map(
                    employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update</Link>                                
                                <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)} style = {{marginLeft:"10px"}}>Delete</button>
                            </td>
                        </tr>
                )}
                

                
            </tbody>
        </table>
    </div>
  )

  
}

