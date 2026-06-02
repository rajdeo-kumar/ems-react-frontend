import React, { useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeServices from '../services/EmployeeServices'

export const AddEmployeeComponent = () => {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate ();

  const{id} = useParams();

//   Form Valiation Logic:::::::::::::
const [errors, setErrors] = useState ({
    firstName: '',
    lastName: '',
    email: ''
})

    function validateForm() {
        let formIsValid = true;
        const errorCopy = {...errors};

        if(firstName.trim()) {
            errorCopy.firstName = '';
        } else {
            errorCopy.firstName = 'First Name is required'; 
            formIsValid = false;
        }
        if(lastName.trim()) {
            errorCopy.lastName = '';
        } else {
            errorCopy.lastName = 'Last Name is required'; 
            formIsValid = false;
        }
        if(email.trim()) {
            errorCopy.email = '';
        } else {    
            errorCopy.email = 'Email is required'; 
            formIsValid = false;
        }
        setErrors(errorCopy);
        return formIsValid;
    }

  //save Employee Method:::::::::::::

  /*const saveEmployee = (e) =>{
    e.preventDefault();

    const employee = {firstName, lastName, email}

    //console.log(employee);
    EmployeeServices.createEmployee(employee).then((response) => {
        console.log(response.data);
        navigate('/employees');
    }).catch(error =>{
        console.log(error);
    })
  }*/

    //save or update Employee Method::::::::::
    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();
        if(!validateForm()) {
            return;
        }
        const employee = {firstName, lastName, email}
    
        if(id){
            EmployeeServices.updateEmployee(id, employee).then((response) =>{
                navigate('/employees');
            }).catch(error =>{
                console.log(error);
            })
        }else{
            EmployeeServices.createEmployee(employee).then((response) => {
                console.log(response.data);
                navigate('/employees');
            }).catch(error =>{
                console.log(error);
            })
        }
        
      }

  useEffect(() =>{
    EmployeeServices.getEmployeeById(id).then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmail(response.data.email)
    }).catch(error =>{
        console.log(error)
    })
  }, [])
  
  const title = () =>{
    if(id){
        return <h2 className='text-center'>Update Employee Details</h2>
    } else{
        return <h2 className='text-center'>Add Employee</h2>
    }
  }

    return (
    <div>
        <br/> <br/>        
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {/*<h2 className='text-center'>Add Employee Details</h2>*/}
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name :</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter your name'
                                    name='firstName'
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)} >
                                </input>
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}

                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name :</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter your last name'
                                    name='lastName'
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)} >
                                </input>
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}                            
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id :</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter your email id'
                                    name='email'
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)} >
                                </input>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <button className='btn btn-success center' onClick={(e) => saveOrUpdateEmployee(e)}>Add</button>
                            <Link to ='/employees' className='btn btn-danger' style = {{marginLeft:"10px"}}>Cancel</Link>
                            </div>
                            
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent