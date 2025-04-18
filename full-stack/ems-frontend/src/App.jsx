import './App.css'
import ListEmployeeComponent from "./components/ListEmployeeComponent"
import EmployeeComponent from './EmployeeComponent'
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>   
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:3000 */}
          <Route path='/' element = { <ListEmployeeComponent /> }></Route>

          {/* // http://localhost:3000/employees */}
          <Route path='/employees' element = { <ListEmployeeComponent /> }></Route>
           
          {/* // http://localhost:3000/add-employee */}
          <Route path='/add-employee' element = { <EmployeeComponent /> }></Route>

          {/* // http://localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
