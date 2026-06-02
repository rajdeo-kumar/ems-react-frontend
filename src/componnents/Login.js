import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; 

export const Login = () => {

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log("Login button clicked");
    }

    const loginUser = (e) => {
        e.preventDefault(); 
        console.log("User logged in with email:", email);
        console.log("User logged in with password:", password);
    }

    const reset = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        console.log("Form reset");
    }

    // const handleLogin = (e) => {
    //     e.preventDefault(); // Prevent default form submission

    //     // Basic validation (replace with actual authentication logic)
    //     if (username === 'user' && password === 'password') {
    //       setMessage('Login successful!');
    //       // Redirect or perform further actions
    //     } else {
    //       setMessage('Invalid username or password.');
    //     }
    //   }

    return ( 
              
        <div className="container">
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className="text-center">Login</h2>
                    <div className='card-body'>
                        <form>
                            <div className="form-group mb-2">
                                <label>Email / User Name:</label>
                                <input type="email" 
                                name="email"
                                className="form-control" 
                                placeholder="Enter email" 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" 
                                name="password"
                                className="form-control" 
                                placeholder="Enter password" 
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={(e) => loginUser(e)} >Login</button>
                            <button type="submit" className="btn btn-danger" onClick={(e) => reset(e)} >Reset</button>
                        </form>
                        <h6 className="text-center">Sign Up / Registration</h6>
                    </div>
                </div>        
            </div>  
        </div>
    );
}

export default Login;
   