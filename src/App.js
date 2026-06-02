import './App.css';
import {BrowserRouter as Router, Route, Routes, BrowserRouter}from 'react-router-dom';
import FooterComponent from './componnents/FooterComponent';
import HeaderComponent from './componnents/HeaderComponent';
import { ListEmpoloyeeComponent } from './componnents/ListEmpoloyeeComponent';
import AddEmployeeComponent from './componnents/AddEmployeeComponent';
import EmployeeComponent from './componnents/EmployeeComponent';
import Login from './componnents/Login';


function App() {
  return (
    <div >
      <BrowserRouter>
      <HeaderComponent/>
      <Routes>        
          <Route exact path='/' Component={ListEmpoloyeeComponent}></Route>
          <Route path='/employees' Component={ListEmpoloyeeComponent}></Route>
          <Route path='/add-employee' Component={AddEmployeeComponent}></Route>
          <Route path='/edit-employee/:id' Component={AddEmployeeComponent}></Route>
          <Route path='/addEmployeeDetails' Component={EmployeeComponent}></Route>
          <Route path='/login' Component={Login}></Route>
      </Routes>      
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
