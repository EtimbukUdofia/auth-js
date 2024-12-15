import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import FloatingShape from "./components/FloatingShape"
import LoadingSpinner from "./components/LoadingSpinner"

import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import EmailVerificationPage from "./pages/EmailVerificationPage"
import HomePage from "./pages/HomePage"

import { useAuthStore } from "./store/authStore"
import { useEffect } from "react"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"

// protect routes that require authentication
const ProtectRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  };

  if (!user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  };
  
  return children;
};

// reirect authenticated users to homepage
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to={"/"} replace />
  };

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      <FloatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <Routes>
        <Route path="/" element={
          <ProtectRoute>
            <HomePage />
          </ProtectRoute>
        } />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={
          <RedirectAuthenticatedUser>
            <EmailVerificationPage />
          </RedirectAuthenticatedUser>
        } />
        <Route path="/forgot-password" element={
          <RedirectAuthenticatedUser>
            <ForgotPasswordPage />
          </RedirectAuthenticatedUser>
        } />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
