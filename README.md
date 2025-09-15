# Auth-JS - Modern Authentication System

A full-stack authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js), featuring a modern UI and comprehensive security features.

## Features

- 🔐 Secure User Authentication
- ✉️ Email Verification System
- 🔑 Password Reset Functionality
- 🎨 Modern UI with Tailwind CSS & Framer Motion
- 🔒 JWT Token-based Authentication
- 🌐 Protected Routes
- 📱 Responsive Design
- 🔄 State Management with Zustand
- 📧 Email Notifications via Mailtrap

## Tech Stack

### Backend

- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt.js for password hashing
- Mailtrap for email services
- Cookie-parser for handling cookies

### Frontend

- React.js with Vite
- Tailwind CSS for styling
- Framer Motion for animations
- Zustand for state management
- React Router for navigation
- Axios for API requests
- React Hot Toast for notifications

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Mailtrap account for email services

### Installation

1. Clone the repository:

```bash
git clone https://github.com/EtimbukUdofia/auth-js.git
cd auth-js
```

2. Install dependencies for both backend and frontend:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Create a .env file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
MAILTRAP_TOKEN=your_mailtrap_api_token
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

4. Run the development server:

```bash
# Run both frontend and backend in development mode
npm run dev
```

## Project Structure

```
auth-js/
├── backend/
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── db/
│   │   └── connectDB.js
│   ├── mailtrap/
│   │   ├── emails.js
│   │   ├── emailTemplates.js
│   │   └── mailtrap.config.js
│   ├── middleware/
│   │   └── verifyToken.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.route.js
│   ├── utils/
│   │   └── generateTokenAndSetCookie.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
└── package.json
```

## Features in Detail

### User Authentication

- Secure signup and login functionality
- Password strength validation
- JWT-based authentication with HTTP-only cookies
- Protected routes with middleware verification

### Email Verification

- Automated verification code system
- Timed token expiration
- Custom email templates
- Secure verification process

### Password Management

- Forgot password functionality
- Secure password reset process
- Password strength meter
- Encryption using bcrypt

### UI/UX Features

- Animated transitions using Framer Motion
- Responsive design with Tailwind CSS
- Toast notifications for user feedback
- Loading states and spinners
- Floating shapes background animation

## API Endpoints

### Auth Routes

- POST /api/auth/signup - Register a new user
- POST /api/auth/login - User login
- POST /api/auth/logout - User logout
- POST /api/auth/verify-email - Verify user email
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/reset-password/:token - Reset password
- GET /api/auth/check-auth - Verify authentication status

## Security Features

- Passwords hashed using bcrypt
- HTTP-only cookies for JWT storage
- CORS protection
- Token expiration
- Secure email verification process
- Protected API endpoints
- Environment variable configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

<!-- ## License

This project is licensed under the ISC License. -->
