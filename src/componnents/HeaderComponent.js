import React from "react";

const HeaderComponent = () =>{
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="" className="navbar-brand">
                            Employee Management System
                        </a>
                    </div>
                    
                    <div class="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/employees" className="nav-link">Employees</a>
                            </li>
                            <li className="nav-item">
                                <a href="/add-employee" className="nav-link">Add Employee</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" 
                                role="button" data-bs-toggle="dropdown" 
                                aria-expanded="false">Dropdown</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link">Login</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> 
                    </div>
                </nav>
                
            </header>
        </div>
    )
}
export default HeaderComponent