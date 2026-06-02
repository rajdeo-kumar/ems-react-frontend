import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8082/ems/api/v1/employees"

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employees){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employees)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employees){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employees);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }
}

export default new EmployeeService();