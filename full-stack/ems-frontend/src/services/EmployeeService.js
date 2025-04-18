import axios from "axios";

const REST_API_BASE_URL ='http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (emplyoee) => axios.post(REST_API_BASE_URL, emplyoee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

export const updateEmployee = (employeeId, emplyoee) => axios.put(REST_API_BASE_URL + '/' + employeeId, emplyoee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);