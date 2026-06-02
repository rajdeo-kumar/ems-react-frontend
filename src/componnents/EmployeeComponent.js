import React, { useEffect, useState } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
   
    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();
        const employee = {firstName, lastName, email}
        // Logic to save or update employee
        console.log(employee);
    }

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'> 
                    <h2 className='text-center'>Add Employee Details</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input type="text" placeholder='Enter First Name' 
                                name='firstName' className='form-control'
                                value={firstName} onChange={handleFirstNameChange}/>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input type="text" placeholder='Enter Last Name' 
                                name='lastName' className='form-control'
                                value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id</label>
                                <input type="email" placeholder='Enter Email Id' 
                                name='email' className='form-control'
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                            {/* <Link to="/employees" className="btn btn-danger" style={{marginLeft:"10px"}}>Cancel</Link> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EmployeeComponent;