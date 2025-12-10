import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { StudentPage } from "./pages/StudentPage";
import { CoursePage } from "./pages/CoursePage";
import { EnrollmentPage } from "./pages/EnrollmentPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { LoginProvider } from "./context/LoginContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <LoginProvider>
      <div className="bg-sky-50  min-h-screen">
        <header>
          <Navbar />
        </header>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: { background: "#363636", color: "white" },
            success: {
              duration: 2500,
              iconTheme: { primary: "green", secondary: "black" },
            },
          }}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/student"
              element={
                <ProtectedRoute>
                  <StudentPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/course"
              element={
                <ProtectedRoute>
                  <CoursePage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/enrollment"
              element={
                <ProtectedRoute>
                  <EnrollmentPage />
                </ProtectedRoute>
              }
            ></Route>

            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegistrationPage />}></Route>
          </Routes>
        </main>
        <footer></footer>
      </div>
    </LoginProvider>
  );
}

export default App;
