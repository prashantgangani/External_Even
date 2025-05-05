import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/login.jsx'
import Signup from './components/signup.jsx'

const initialEmployees = [
  { id: 1, name: 'ABCD', email: 'abcd.@gmail.com', department: 'IT' }
]

function App() {
  const [employees, setEmployees] = useState(initialEmployees)
  const [searchQuery, setSearchQuery] = useState('')

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id))
  }

  const handleAdd = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }])
  }

  const handleUpdate = (id, updatedData) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, ...updatedData } : emp
    ))
  }

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-content">
            <h1>Employee Management</h1>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/employees">Employees</Link>
              <Link to="/employees/new">Add Employee</Link>
            </div>
          </div>
        </nav>
      
        <div className="container">
          <Routes>
          <Route path="/" element={<Login />} />

            
            <Route path="/signup" element={<Signup />} />

            <Route 
              path="/employees" 
              element={
                <EmployeeList 
                  employees={filteredEmployees}
                  onDelete={handleDelete}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
              } 
            />
            <Route 
              path="/employees/new" 
              element={
                <EmployeeForm 
                  onSubmit={handleAdd}
                />
              } 
            />
            <Route 
              path="/employees/:id/edit" 
              element={
                <EmployeeForm 
                  employees={employees}
                  onSubmit={handleUpdate}
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Welcome to Employee Management System</h2>
      <p>.</p>
    </div>
  )
}

function EmployeeList({ employees, onDelete, searchQuery, onSearchChange }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search employees..." 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button 
                  className="btn btn-danger"
                  onClick={() => onDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function EmployeeForm({  onSubmit }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    navigate('/employees')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="employee-form">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <div className="form-actions">
          <button 
            type="button" 
            className="btn"
            onClick={() => navigate('/employees')}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
