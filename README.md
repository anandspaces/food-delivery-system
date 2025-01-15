
# Food Delivery System

This is a full-stack food delivery system built with **Node.js**, **Express**, **MongoDB**, and **React**. The system supports user registration, login, and managing food orders. It includes a backend API built with Express.js and a frontend built with React.js.

## Features

- **User Authentication**: Users can register and log in to the system using their credentials.
- **Menu Management**: Users can browse the menu and add items to the cart.
- **Order Management**: Users can place orders and track their status.
- **JWT-based Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **Responsive UI**: The frontend is built using React, styled with Tailwind CSS.

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS
  - React Router
  - Axios for API calls

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication
  - bcryptjs for password hashing

- **Development Tools**:
  - Visual Studio Code
  - Postman (for API testing)

## Project Structure

### Backend

```
backend/
├── controllers/
│   └── authController.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── app.js
├── package.json
└── server.js
```

### Frontend

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   └── App.js
├── package.json
└── tailwind.config.js
```

## Installation

### Backend

1. Navigate to the `backend` directory and install the required dependencies:

   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in the `backend` directory and add your MongoDB URI and JWT secret:

   ```
   MONGO_URI=mongodb://localhost:27017/food_delivery
   JWT_SECRET=your_jwt_secret
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory and install the required dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the frontend development server:

   ```bash
   npm run dev
   ```

3. Open your browser and go to `http://localhost:3000` to access the application.

## API Endpoints

### User Routes

- **POST /api/users/register**: Register a new user
  - Request body: `{ "username": "your_username", "password": "your_password" }`
  
- **POST /api/users/login**: Log in a user and receive a JWT
  - Request body: `{ "username": "your_username", "password": "your_password" }`

### Example Requests

- **Register User**:
  ```bash
  curl -X POST http://localhost:5000/api/users/register   -H "Content-Type: application/json"   -d '{"username": "user1", "password": "password123"}'
  ```

- **Login User**:
  ```bash
  curl -X POST http://localhost:5000/api/users/login   -H "Content-Type: application/json"   -d '{"username": "user1", "password": "password123"}'
  ```
