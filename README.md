# Employee Management System

A MERN stack web application for managing employees efficiently.

## Features

- User Authentication (Login/Register)
- Employee Management (CRUD operations)
- Profile Picture Upload
- Employee Search
- Employee Details View
- Different Employee Types

## Tech Stack

- MongoDB
- Express.js
- React.js
- Node.js
- Material-UI
- JWT Authentication

## Project Structure

```
employee-management/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       └── utils/
└── server/                 # Express backend
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    └── middleware/
```

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user

### Employees
- GET /api/employees - Get all employees
- POST /api/employees - Create new employee
- GET /api/employees/:id - Get employee by ID
- PUT /api/employees/:id - Update employee
- DELETE /api/employees/:id - Delete employee
- GET /api/employees/search - Search employees

## License

MIT